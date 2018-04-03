import test from 'ava'
import logger from '../src/utils/logger'

test('is an object', t => {
  t.is(typeof logger, 'object')
})
