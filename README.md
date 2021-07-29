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
echo PLEASE REMEMBER TO LOG OUT AND LOG BACK IN

npm i -g isir

```

## Usage

```bash

isir list # show input devices
isir watch /dev/input/event{3,5,8} # debug input data (connect a remote shutter, run this command, and start pressing buttons)

isir learn -e p /dev/input/event2 # program will listen for a key combination associated with s.sh command and exit
isir learn -e s /dev/input/event2 # program will listen for a key combination associated with p.sh command and exit

env DEBUG=* isir listen /dev/input/event2 # now it will recognize your key combinations/buttons and execute commands in bin
# please note you should run listen in the directory with bin in it, or just cd to the location of isir

```

## Status

Functional but still needs hooks, rewrites, and modularization.

## Credits / Previous Work

This program uses some code from https://www.npmjs.com/package/@tviso/keyboard-linux
