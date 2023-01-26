import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatMap = {
  'stylish': stylish,
  'plain': plain,
  'json': json
};

export default (data, nameFormater) => {
  let format = formatMap[nameFormater];
  return format(data);
};