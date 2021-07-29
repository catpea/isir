#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import debug from 'debug';
import HumanInterfaceDevice from '../device.js';

const program = new Command();
const log = debug('listen');

program
  .option('-t, --type <number>', 'filter by type')
  .option('-c, --code <number>', 'filter by code')
  .option('-v, --value <number>', 'filter by value')
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

    if(options.type !== undefined){
      if(event.type == options.type){
        //console.log(`event.type (${event.type}) == options.type(${options.type})`);
      }else{
        return;
      }
    }

    if(options.code !== undefined){
      if(event.code == options.code){
        //console.log(`event.code (${event.code}) == options.code(${options.code})`);
      }else{
        return;
      }
    }

    if(options.value !== undefined){
      if(event.value == options.value){
        //console.log(`event.value (${event.value}) == options.value(${options.value})`);
      }else{
        return;
      }
    }

    if(options.debug){
      console.log(event);
    }else{
      console.log(event.text);
    }

  });

  // hid.on("keypress", (event) => {
  //   //console.log(event);
  // });

}
