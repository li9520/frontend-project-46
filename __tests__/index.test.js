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
  const expectSimple = readFile('expectSimple.txt');
  const actual1 = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
  expect(actual1).toStrictEqual(expectSimple);
  const actual2 = genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'));
  expect(actual2).toStrictEqual(expectSimple);
});
