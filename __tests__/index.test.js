import genDiff from '../src/index.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');


test('genDiff', () => {
  const expectSimple = readFile('expectNested.txt');
  const actual1 = genDiff(getFixturePath('nestedFile1.json'), getFixturePath('nestedFile2.json'));
  expect(actual1).toEqual(expectSimple);
  const actual2 = genDiff(getFixturePath('nestedFile1.yml'), getFixturePath('nestedFile2.yml'));
  expect(actual2).toEqual(expectSimple);
});
