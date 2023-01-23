import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parse from './parsers.js';


const compareObj = (data1, data2) => {
  const sortesKeys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
  const result = [];
  result.push('{');
  for (const key of sortesKeys) {
    let el;
    if (!Object.hasOwn(data1, key)) {
      el = `  + ${key}: ${data2[key]}`;
    } else if (!Object.hasOwn(data2, key)) {
      el = `  - ${key}: ${data1[key]}`;
    } else if (data1[key] !== data2[key]) {
      el = `  - ${key}: ${data1[key]}\n`;
      el += `  + ${key}: ${data2[key]}`;
    } else {
      el = `    ${key}: ${data1[key]}`;
    }
    result.push(el);
  }
  result.push('}');
  return result.join('\n');
};

const getAbsolutePath = (filepath) => path.resolve(filepath);
const readFile = (filepath) => fs.readFileSync(getAbsolutePath(filepath), "utf8");

const getFormat = (filepath) => path.extname(filepath);


export default (filepath1, filepath2) => {

  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);

  const parsedFile1 = parse(file1, getFormat(filepath1));
  const parsedFile2 = parse(file2, getFormat(filepath2));
  return compareObj(parsedFile1, parsedFile2);
};
