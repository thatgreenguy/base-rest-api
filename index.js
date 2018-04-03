'use strict'
const CFG = require('./src/utils/cfg')
const log = require('./src/utils/logger')

function dostuff () {
  console.log(JSON.stringify(CFG))
  log.info(JSON.stringify(CFG))
}

setTimeout(dostuff, 2000)
