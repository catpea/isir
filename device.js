#!/usr/bin/env node

import { open } from "fs/promises";
import EventEmitter from "events";
import debug from 'debug';
import metadata from "./metadata.js";

const log = debug('hid');

class HumanInterfaceDevice extends EventEmitter {
  #bufferSize = 24;
  #inputDevice = null;
  #buffer = null;
  #fileHandle = null;

  async open(inputDevice) {
    this.#inputDevice = inputDevice;
    this.#buffer = Buffer.alloc(this.#bufferSize);
    this.#fileHandle = await open(this.#inputDevice, "r");
    log(`HID Opening ${this.#inputDevice}`);
    await this.read();
  }

  async read() {
    const { bytesRead, buffer } = await this.#fileHandle.read( this.#buffer, 0, this.#bufferSize );
    const event = this.parse();
    if (event) this.emit(event.type, event);
    if (this.#fileHandle) await this.read();
  }

  async close() {
    await this.#fileHandle?.close();
  }

  parse(input, buffer) {
    const EVENT_TYPES = ["keyup", "keypress", "keydown"];
    const EV_SYN = 0;
    const EV_KEY = 1;
    const EV_REL = 2;
    const EV_ABS = 3;

    const event = {
      hex: this.#buffer.toString('hex'),
      device: this.#inputDevice,
    };
    const evtype = this.#buffer.readUInt16LE(8);

    if (process.arch === "x64") {
      Object.assign(event, {
        timeS: this.#buffer.readUIntLE(0, 4),
        timeMS: this.#buffer.readUIntLE(8, 4),
        type: this.#buffer.readUInt16LE(16, 2),
        code: this.#buffer.readUInt16LE(18, 2),
        value: this.#buffer.readInt32LE(20, 4),
      });
    } else {
      // arm or ia32
      Object.assign(event, {
        timeS: this.#buffer.readUInt32LE(0, 4),
        timeMS: this.#buffer.readUInt32LE(4, 4),
        type: this.#buffer.readUInt16LE(8, 2),
        code: this.#buffer.readUInt16LE(10, 2),
        value: this.#buffer.readInt32LE(12, 4),
      });
    }

    if (evtype === EV_KEY || true) {
      event.keyId = metadata.buttonsIndex[event.code];
      event.type = EVENT_TYPES[event.value];
    } else if (evtype === EV_REL) {
      event.axis = metadata.axesIndex[event.code];
      event.type = "rel";
    } else if (evtype === EV_ABS) {
      event.axis = metadata.axesIndex[event.value];
      event.type = "abs";
    } else if (evtype === EV_SYN) {
      event.type = "syn";
    } else {
      log(evtype);
      return false;
    }

    return event;
  }
}

export default HumanInterfaceDevice;
