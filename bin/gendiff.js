#!/usr/bin/env node

//const { program } = require('commander');
import { program } from 'commander';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .parse(process.argv);
  
