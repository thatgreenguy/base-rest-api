import test from 'ava'
import logger from '../src/utils/logger'

test('is an object', t => {
  t.is(typeof logger, 'object')
})
console.log(JSON.stringify(logger))
test('timestamp returns string', t => {
  const expected = logger.transports.file.timestamp()
  t.truthy(typeof expected === 'string')
})
test('formatter returns a string', t => {
  const expected = logger.transports.console.timestamp()
  t.truthy(typeof expected === 'string')
})
