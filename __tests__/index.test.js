import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectNestedStylish = readFile('expectNestedStylish.txt');
const expectNestedPlain = readFile('expectNestedPlain.txt');
const expectNestedJson = readFile('expectNestedJson.txt');

const extensions = ['json', 'yml'];

test.each(extensions)('diff formats of files (.json .yml)', (extension) => {
  const fileName1 = `${getFixturePath('nestedFile1')}.${extension}`;
  const fileName2 = `${getFixturePath('nestedFile2')}.${extension}`;

  expect(genDiff(fileName1, fileName2, 'stylish')).toEqual(expectNestedStylish);
  expect(genDiff(fileName1, fileName2, 'plain')).toEqual(expectNestedPlain);
  expect(genDiff(fileName1, fileName2, 'json')).toEqual(expectNestedJson);
  expect(genDiff(fileName1, fileName2)).toEqual(expectNestedStylish);
});
