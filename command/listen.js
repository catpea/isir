#!/usr/bin/env node

import fs from 'fs-extra';
import path from 'path';
import { spawn } from 'child_process';
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

async function detector(){
  const guid = uuidv5( pattern, options.namespace );
  const patternExists = config.store.pattern[guid];
  if(patternExists){
    const macroName = config.store.pattern[guid].macro;
    const macroExists = config.store.macro[macroName];
    if(macroExists){
      const {command: commandName, data: argumentVector} = config.store.macro[macroName];
      const directory = config.store.system.options.commands?path.resolve(config.store.system.options.commands):path.join(process.cwd(), 'commands');
      const target = path.join(directory, commandName);
      const commandExists = await fs.pathExists( target );
      if(commandExists){
        console.log(`Executing: ${target}`);
        const ls = spawn(target, argumentVector||[], {cwd: directory});
      }
    }else{
      log(`Macro: "${macroName}" does not exist run: isir conf macro ${macroName} command beep # to associate the unix beep command with macro ${macroName}`)
    }
  }
  pattern = '';
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

// process.on('SIGINT', function() {
//   hids.map( i=>i.removeAllListeners() );
//   hids.map( i=>i.close() );
//   execute.cancel();
//   process.exit();
//   //process.kill(process.pid);
// });
