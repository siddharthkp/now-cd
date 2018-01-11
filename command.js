const pkgDir = require('pkg-dir')
const tokens = require('./tokens')
const rootDir = pkgDir.sync(__dirname)

const command = absolute => {
  return `${rootDir}/node_modules/.bin/${absolute} -t ${tokens.now}`
}

module.exports = command
