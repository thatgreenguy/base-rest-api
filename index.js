'use strict'
const CFG = require('./src/utils/cfg')
const log = require('./src/utils/logger')

function dostuff () {
  log.info('Yep siree bob!' + JSON.stringify(CFG))
}

setInterval(dostuff, 2000)
