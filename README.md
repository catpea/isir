# isir
Remote control Raspberry Pi via a Bluetooth keyboard or a remote shutter device.

## About

JavaScript has changed since the original code used here was written,
the underlying code must be largely re-written to take advantage of classes and async/await.

The Bluetooth devices this library needs to listen to, may have unique /proc/bus/input/devices characteristics,
that this system must account for.

## Installation

You need to add the user under which this will run to the input group:

```bash

usermod -a -G input $USER


```

## Status

Functional but still needs hooks, rewrites, and modularization.

## Credits / Previous Work

This program heavily relies on code from packages listed below.

- https://www.npmjs.com/package/input-event
- https://www.npmjs.com/package/@tviso/keyboard-linux
- Read Linux Inputs in node.js, Author: Daniel R.
- keyboard.js
- https://github.com/nodebits/linux-joystick
