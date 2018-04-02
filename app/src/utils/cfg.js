'use strict'
const path = require('path')
const envy = require('envy')

const CFG = Object.freeze(envy(path.resolve(__dirname, '../../config/.env')))

module.exports = CFG
