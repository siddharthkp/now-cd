const exec = require('execa')
const { info, loading } = require('prettycli')
const token = require('./token')

const remove = url => {
  return new Promise((resolve, reject) => {
    loading('NOW CD', `Removing previous instance: ${url}`)
    exec
      .shell(`../node_modules/.bin/now rm ${url} -y -t ${token}`)
      .then(result => {
        info('NOW CD', `Removed previous instance`)
        resolve(result.stdout)
      })
      .catch(err => reject(err))
  })
}

module.exports = remove
