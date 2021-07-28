#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
const program = new Command();

program
  .version('0.1.0')
  .command('list', 'list keyboard devices', {executableFile: 'command/list.js' })
  .command('train', 'train system to understand device buttons')
  .command('listen', 'listen packages installed', { isDefault: true, executableFile: 'command/listen.js' });

program.parse(process.argv);
