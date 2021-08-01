# isir
Remote control Raspberry Pi via a Bluetooth keyboard or a remote shutter device.

### Moving from reference implementation to first release candidate
- config needs to be part of the project somehow,
- there needs to be a home directory maybe (peapod?)
- ./bin commnds need to be reachable, first check CWD and then __dirname

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

## Tutorial

```sh

# specify location of your commands
isir conf system options commands /home/peapod/peapod/commands # will have the macros look for commands in /home/peapod/peapod/commands

# create some macros
isir conf macro aardwolf command aardwolf.sh # will create an aardwolf macro that will execute aardwolf.sh in /home/peapod/peapod/commands

# teach iSir to associate keystrokes, or remote control, or remote shutter combinations.
isir learn -m aardwolf /dev/input/event{2,5} # now enter aardwolf in your keeb and that key combination will become associated with the aardwolf macro

# now run the server to monitor for the keystrokes
isir listen /dev/input/event2 # will now listen for the keycombination and execute /home/peapod/peapod/commands/aardwolf.sh if it occurs

```

## Usage

```bash

isir list # show potential input devices
isir watch /dev/input/event{3,5,8} # debug input data (connect a remote shutter, run this command, and start pressing buttons to see what is going on)
isir conf macro play command play.sh
isir learn -m play /dev/input/event2 # program will listen for a key combination associated with play.sh command and exit
isir learn -m stop /dev/input/event2 # program will listen for a key combination associated with stop.sh command and exit
isir listen /dev/input/event2 # now it will recognize your key combinations/buttons and execute commands in bin
# please note you should run listen in the directory with bin in it, or just cd to the location of isir
# prefix things with env DEBUG=*  for some debug info
```

## Status

Functional but still needs hooks, rewrites, and modularization.

## Credits / Previous Work

This program uses some code from https://www.npmjs.com/package/@tviso/keyboard-linux
