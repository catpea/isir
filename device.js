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
    if (event) this.emit('*', event);
    if (this.#fileHandle) await this.read();
  }

  async close() {
    await this.#fileHandle?.close();
  }

  parse(input, buffer) {
    const event = { arch: process.arch, hex: this.#buffer.toString('hex'), device: this.#inputDevice, };
    if (process.arch === "x64") {
      Object.assign(event, { timeS: this.#buffer.readUIntLE(0, 4), timeMS: this.#buffer.readUIntLE(8, 4), type: this.#buffer.readUInt16LE(16), code: this.#buffer.readUInt16LE(18), value: this.#buffer.readInt32LE(20), });
    } else { // arm or ia32
      Object.assign(event, { timeS: this.#buffer.readUInt32LE(0, 4), timeMS: this.#buffer.readUInt32LE(4, 4), type: this.#buffer.readUInt16LE(8), code: this.#buffer.readUInt16LE(10), value: this.#buffer.readInt32LE(12), });
    }
    event.typeName = metadata.inputEventTypesIndex[event.type]?.event;
    event.codeName = metadata.inputEventTypesIndex[event.type]?.events[event.code]
    event.valueName = metadata.inputEventTypesIndex[event.type]?.states[event.value]
    event.text = `Event: time ${event.timeS}.${event.timeMS}, type ${event.type} (${event.typeName}), code ${event.code} (${event.codeName}), value ${(event.value).toString(16)}`

    const separator = ((event.type===0)&&(event.value===0));
    if(separator) event.text = `Event: time ${event.timeS}.${event.timeMS}, -------------- ${event.codeName} ------------`

    return event;
  }
}

export default HumanInterfaceDevice;
