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
npm i -g isir

```

## Usage

```bash

isir list # show input devices
isir /dev/input/event{3,5,8} # debug input data (connect a remote shutter, run this command, and start pressing buttons)
isir train --event play-button /dev/input/event3 # to assign play-button event run this command on a device of choice and press button on your device (in progress)

```

## Status

Functional but still needs hooks, rewrites, and modularization.

## Credits / Previous Work

This program uses some code from https://www.npmjs.com/package/@tviso/keyboard-linux
