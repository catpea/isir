import fs from "fs";

import Keylogger from "./input-event.js";

const errors = {
  DEVICE_NOT_FOUND: "ENODEV",
};

class KeyboardListener {
  constructor() {
    this.currentListeners = [];
    this.callback = null;
  }

  getKeyboards() {
    const response = [];

    const text = fs.readFileSync("/proc/bus/input/devices", "utf8").toString();
    const data = text.split("\n\n").map((block) => block.split("\n"));

    for (const block of data) {
      const about = {};
      // Do not attempt to optimize this, it is not possible: https://mjmwired.net/kernel/Documentation/sysfs-rules.txt
      for (const line of block) {
        if (line.startsWith("N: Name=")) {
          const [, data] = line.match(/^N: Name=(.*)$/);
          about.name = data
            .replace(/^["']|["']$/g, "")
            .replace(/^["']|["']$/g, "")
            .trim();
        } else if (line.startsWith("H: Handlers=")) {
          const [, data] = line.match(/^H: Handlers=(.*)$/);
          about.handlers = data
            .split(" ")
            .map((i) => i.trim())
            .filter((i) => i);
          about.event = about.handlers.filter((i) => i.startsWith("event"));
        }
      }

      // Do not attempt to optimize this, it is not possible: https://mjmwired.net/kernel/Documentation/sysfs-rules.txt
      if (!about.name) continue;
      if (!about.handlers.includes("kbd")) continue;
      if (!about.handlers.includes("sysrq")) continue;
      response.push(about);
    } // for
    return response;
  }

  listenToKeyboard(device) {
    const keyLogger = new Keylogger(device.event);
    keyLogger.on("keypress", (event) => {
      if (!event.keyId) return;
      this.callback(event.keyId, device.name);
    });
    keyLogger.on("error", (e) => this.handleError(e));
    this.currentListeners.push(keyLogger);
  }

  onKeypress(callback) {
    this.callback = callback;
    this.resetListeners();
    const keyboards = this.getKeyboards();
    if (!keyboards.length) {
      this.waitForKeyboards();
      return;
    }
    keyboards.forEach((keyboard) => this.listenToKeyboard(keyboard));
  }

  handleError(e) {
    if (e.code === errors.DEVICE_NOT_FOUND) {
      return this.onKeypress(this.callback);
    }
    console.log("key-listener-error", e);
  }

  resetListeners() {
    this.currentListeners.forEach((keyboard) => keyboard.removeAllListeners());
    this.currentListeners = [];
  }

  waitForKeyboards() {
    setTimeout(() => this.onKeypress(this.callback), 1000 * 10);
  }
}

export default KeyboardListener;
