import test from 'ava'
import logger from '../src/utils/logger'

test('is an object', t => {
  t.is(typeof logger, 'object')
})
test('is a function', t => {
  t.is(typeof logger.transports.console.formatter, 'function')
})
console.log(logger)
