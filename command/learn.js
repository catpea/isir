#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import { v5 as uuidv5, v4 as uuidv4 } from 'uuid';
import {debounce} from 'lodash-es';
import debug from 'debug';
import HumanInterfaceDevice from '../device.js';
import Conf from 'conf';

const config = new Conf({projectName: 'isir', projectSuffix:'catpea'});
const program = new Command();
const log = debug('listen');

program
  .requiredOption('-n, --namespace <uuid>', 'UUID Namespace', '3b0ad683-acd4-4d24-83b2-b7d6d2f32cd0')
  .option('-e, --event-name <name>', 'event name to associate with key combination')
  .option('-d, --debug', 'debug mode')
  .version('1.0.0');

program.parse(process.argv);
const options = program.opts();
const devices = program.args;

if(devices.length === 0) {
  console.log(`You must specify a device ex: isir /dev/input/event{3,5,8}`);
  console.log(`Consider running: isir list`);
}

const hids = [];
let pattern = '';
const execute = debounce(detector, 666);

function detector(){
  const guid = uuidv5( pattern, options.namespace );
  console.log(guid, ' ', options.eventName);
  config.set(`events.${options.eventName}.guid`, guid);
  config.set(`events.${options.eventName}.name`, options.eventName);
  pattern = '';
  hids.map( i=>i.removeAllListeners() );
  hids.map( i=>i.close() );
  execute.cancel();
  process.kill(process.pid);
}

for (var device of devices) {
  const hid = new HumanInterfaceDevice();
  hids.push(hid);
  log(`Opening: ${device}`);
  hid.open(device);
  hid.on("*", (event) => {
    pattern += event.value;
    execute();
  });
}
