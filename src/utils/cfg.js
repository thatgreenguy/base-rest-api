'use strict'
const path = require('path')
const envy = require('envy')

const CFG = envy(path.resolve(__dirname, '../../config/.env'))

module.exports = Object.freeze(CFG)
