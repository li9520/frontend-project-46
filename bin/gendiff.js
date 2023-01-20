#!/usr/bin/env node

//const { program } = require('commander');
import { program } from 'commander';

program
  .version('0.0.1')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  
  .description('Compares two configuration files and shows a difference.')
  
  .parse(process.argv);
  
