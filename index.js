const emptyParamMiddleware = callback => p => {
  if (!p) {
    throw new Error('no param provided');
  }
  return callback(p);
}
const string = emptyParamMiddleware(p => typeof p === 'string');
const bool = p => typeof p === 'boolean';
const func = p => typeof p === 'function';
const num = p => typeof p === 'number';
const obj = p => {
  const keyVal = Object.entries(p);
  return keyVal.every(([key, validator]) => {
    const isValid = validator(p[key]);
    return isValid;
  });
}

module.exports = {
  string,
  obj,
  bool,
  func,
  num,
}