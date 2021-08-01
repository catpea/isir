#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
const program = new Command();

program
  .version('0.1.0')
  .command('conf', 'set/get configuration values', {executableFile: 'command/conf.js' })
  .command('list', 'list keyboard devices', {executableFile: 'command/list.js' })
  .command('learn', 'learn a new input combination', {executableFile: 'command/learn.js' })
  .command('watch', 'watch key metadata', {executableFile: 'command/watch.js' })
  .command('listen', 'listen packages installed', { isDefault: true, executableFile: 'command/listen.js' });

program.parse(process.argv);
