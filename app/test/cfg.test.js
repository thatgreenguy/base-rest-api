import test from 'ava'
import cfg from '../config/cfg'

test('is an object', t => {
  t.is(typeof cfg, 'object')
})
