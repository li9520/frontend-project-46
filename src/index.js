import _ from 'lodash';
import fs from 'fs';
import path from 'path';

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

export default (filepath1, filepath2) => {
  const file1 = fs.readFileSync(getAbsolutePath(filepath1), "utf8");
  const file2 = fs.readFileSync(getAbsolutePath(filepath2), "utf8");
  const extname = path.extname(filepath1);
  if(extname === '.json') {
    return(compareObj(JSON.parse(file1), JSON.parse(file2)));
  }
};
