#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import debug from 'debug';
import { readFile } from "fs/promises";
import HumanInterfaceDevice from '../device.js';

const program = new Command();
const log = debug('listen');

program
  .version('1.0.0')
  .requiredOption('-q, --query <properties...>', 'query properties', ['kbd', 'sysrq']) //
  .option('-a, --assign <text>', 'assign mode');

program.parse(process.argv);
const options = program.opts();
const devices = program.args;

main(options, devices);
async function main(options, devices){
  
  const matches = [];
  const text = (await readFile("/proc/bus/input/devices", "utf8")).toString();
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
    let match = true;
    for (const property of options.query) {
      if (!about.handlers?.includes(property)){
        match = false;
        break;
      }
    }
    if(!match) continue;
    matches.push(about);
  } // for

  for (const device of matches) {
    console.log(JSON.stringify(device));
  }

}
