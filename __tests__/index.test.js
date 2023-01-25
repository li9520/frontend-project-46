import genDiff from '../src/index.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

let file1JSON, file2JSON, file1YML, file2YML;
beforeAll(() => {
  file1JSON = getFixturePath('nestedFile1.json');
  file2JSON = getFixturePath('nestedFile2.json');
  file1YML = getFixturePath('nestedFile1.yml');
  file2YML = getFixturePath('nestedFile2.yml');
});

test('genDiff', () => {
  expect(genDiff(file1JSON, file2JSON)).toEqual(readFile('expectNestedStylish.txt')) ;
  expect(genDiff(file1YML, file2YML)).toEqual(readFile('expectNestedStylish.txt'));
  expect(genDiff(file1JSON, file2JSON, 'plain')).toEqual(readFile ('expectNestedPlain.txt'));
  expect(genDiff(file1YML, file2YML, 'plain')).toEqual(readFile('expectNestedPlain.txt'));
});
