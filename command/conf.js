#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import debug from 'debug';
import { readFile } from "fs/promises";
import Conf from 'conf';

const program = new Command();
const log = debug('conf');
const config = new Conf({projectName: 'isir', projectSuffix:'catpea'});

program
  .version('1.0.0')
  .requiredOption('-b, --bork <properties...>', 'bork properties', ['flarp', 'hutzpa']) // set the thing!
  .option('-a, --assign <text>', 'assign mode');

program.parse(process.argv);
const options = program.opts();
const things = program.args;

main(options, things);
async function main(options, things){
  const [location, key, name, value, ...data] = things;
  config.set(`${location}.${key}.${name}`, value);
  if(data?.length) config.set(`${location}.${key}.data`, data);
}
