const pkgDir = require('pkg-dir')

const rootDir = pkgDir.sync(__dirname)

const command = absolute => {
  return `${rootDir}/node_modules/.bin/${absolute}`
}

module.exports = command
