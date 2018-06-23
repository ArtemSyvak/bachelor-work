'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')


module.exports = merge(prodEnv, {
  // STATIC_PATH_PREFIX: '"/"' 
  NODE_ENV: '"development"'
})
