'use strict'
const CFG = require('./config/cfg')

function dostuff () {
  console.log(JSON.stringify(CFG))
}

setTimeout(dostuff, 2000)
