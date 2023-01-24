import _ from 'lodash';

// BEGIN (write your solution here)

const buildDiffTree  = (obj1, obj2) => {
  const sortesKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));
  return sortesKeys.map((key) => {
    const diff = {};
    diff.name = key;
    if (!Object.hasOwn(obj1, key)) {
      diff.status = 'added';
      diff.value = obj2[key];
      return diff;
    }
    if (!Object.hasOwn(obj2, key)) {
      diff.status = 'deleted';
      diff.value = obj1[key];
      return diff;
    }
    if ((_.isObject(obj1[key])) && (_.isObject(obj2[key]))) {
      diff.status = 'unchanged';
      diff.children = buildDiffTree(obj1[key], obj2[key]);
      return diff;
    }
    if (obj1[key] === obj2[key]) {
      diff.status = 'unchanged';
      diff.value = obj1[key];
      return diff;
    }
    else {
      diff.status = 'changed';
      diff.value = {
        old: obj1[key],
        new: obj2[key]
      }
      return diff;
    }
  });
};

export default buildDiffTree;