const { string, bool, func, num, obj } = require('./index');

describe('string', () => {
  it('should return true if param is string', () => {
    expect(string('wow')).toBe(true);
  })
  it('should return false if param is not string', () => {
    expect(string(1)).toBe(false);
    expect(string(true)).toBe(false);
    expect(string(() => {})).toBe(false);
    expect(string({})).toBe(false);
    expect(string([1, 2])).toBe(false);
  })
})

describe('bool', () => {
  it('should return true if param is bool', () => {
    expect(bool(false)).toBe(true);
  })
  it('should return false if param is not bool', () => {
    expect(bool(1)).toBe(false);
    expect(bool('aaa')).toBe(false);
    expect(bool(() => {})).toBe(false);
    expect(bool({})).toBe(false);
    expect(bool([1, 2])).toBe(false);
  })
})

describe('func', () => {
  it('should return true if param is func', () => {
    expect(func(() => {})).toBe(true);
  })
  it('should return false if param is not func', () => {
    expect(func(1)).toBe(false);
    expect(func('aaa')).toBe(false);
    expect(func(false)).toBe(false);
    expect(func({})).toBe(false);
    expect(func([1, 2])).toBe(false);
  })
})

describe('num', () => {
  it('should return true if param is num', () => {
    expect(num(12)).toBe(true);
  })
  it('should return false if param is not num', () => {
    expect(num(() => {})).toBe(false);
    expect(num('aaa')).toBe(false);
    expect(num(false)).toBe(false);
    expect(num({})).toBe(false);
    expect(num([1, 2])).toBe(false);
  })
})

describe('obj', () => {
  const schema = {
    hello: string,
  };
  it('should return true if param is obj', () => {
    expect(obj(schema)({
      hello: 'mister',
    })).toBe(true);
  })
  it('should return false if param is not obj', () => {
    const s = {
      test: num,
    }
    expect(obj(s)(() => {})).toBe(false);
    expect(obj(s)('aaa')).toBe(false);
    expect(obj(s)(false)).toBe(false);
    expect(obj(s)({})).toBe(false);
    expect(obj(s)([1, 2])).toBe(false);
  })
})