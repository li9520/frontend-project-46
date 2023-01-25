import stylish from './stylish.js';
import plain from './plain.js';

const formatMap = {
  'stylish': stylish,
  'plain': plain
};

export default (data, nameFormater) => {
  let format = formatMap[nameFormater];
  return format(data);
};