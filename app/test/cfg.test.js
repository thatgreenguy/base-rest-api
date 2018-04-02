import test from 'ava'
import cfg from '../src/utils/cfg'

test('is an object', t => {
  t.is(typeof cfg, 'object')
})
