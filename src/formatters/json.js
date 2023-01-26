import _ from 'lodash';

export default (data) => {
  //const json = { ...data };
  //console.log(json);

  return JSON.stringify(...data, ' ', 3)
};