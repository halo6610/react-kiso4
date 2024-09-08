

import { test } from './test.js';

const keyName = 'hei';

let params = {
  foo: 'foooooo',
  bar: 'baaaaa',
  baz: 'zzzzzz',
  [keyName]: 'moimoi'
};

test(params);
