'use strict'

var fs = require('fs')
var path = require('path')

var basename = path.basename(__filename)
var models = {}

function infuse (dir) {
  dir = path.resolve(__dirname, dir)
  fs
    .readdirSync(dir)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
    })
    .forEach(file => {
      var fileName = file.slice(0, file.length - 3)
      models[fileName] = require(path.join(dir, file))
    })
  return models
}

module.exports = infuse
