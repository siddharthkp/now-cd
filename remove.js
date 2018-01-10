const exec = require('execa')
const { info, loading } = require('prettycli')
const tokens = require('./tokens')

const remove = url => {
  return new Promise((resolve, reject) => {
    loading('NOW CD', `Removing previous instance: ${url}`)
    exec
      .shell(`../node_modules/.bin/now rm ${url} -y -t ${tokens.now}`)
      .then(result => {
        info('NOW CD', `Removed previous instance`)
        resolve(result.stdout)
      })
      .catch(err => reject(err))
  })
}

module.exports = remove
