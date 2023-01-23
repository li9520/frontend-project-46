import genDiff from '../src/index.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');


test('genDiff-json', () => {
  const expectSimpleJSON = readFile('expectSimpleJSON.txt');
  console.log(expectSimpleJSON);
  const actual1 = genDiff
  (getFixturePath('file1.json'), getFixturePath('file2.json'));
  console.log(actual1);
  expect(actual1).toStrictEqual(expectSimpleJSON);
});
