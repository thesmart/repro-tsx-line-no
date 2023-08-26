import test from 'node:test';
import { SomeLib } from "./lib.js"


test('whatever test that will fail', (t) => {
  const s = new SomeLib();
  s.doSomething();
});
