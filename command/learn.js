#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import debug from 'debug';
import HumanInterfaceDevice from '../device.js';

const program = new Command();
const log = debug('listen');

program

  .option('-d, --debug', 'debug mode')
  .version('1.0.0');

program.parse(process.argv);
const options = program.opts();
const devices = program.args;

if(devices.length === 0) {
  console.log(`You must specify a device ex: isir /dev/input/event{3,5,8}`);
  console.log(`Consider running: isir list`);
}

for (var device of devices) {
  const hid = new HumanInterfaceDevice();
  log(`Opening: ${device}`);
  hid.open(device);
  hid.on("*", (event) => {
    console.log(event.value);
  });
}
