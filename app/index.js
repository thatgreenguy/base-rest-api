'use strict'
const CFG = require('./src/utils/cfg')

function dostuff () {
  console.log(JSON.stringify(CFG))
}

setTimeout(dostuff, 2000)
