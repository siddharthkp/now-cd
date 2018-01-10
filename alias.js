const exec = require('execa')
const { info, loading } = require('prettycli')
const token = require('./token')

const set = (url, alias) => {
  return new Promise((resolve, reject) => {
    loading('NOW CD', 'Updating alias')
    exec
      .shell(`./node_modules/.bin/now alias set ${url} ${alias} -t ${token}`)
      .then(result => {
        info('NOW CD', result.stdout)
        resolve(alias)
      })
      .catch(err => reject(err))
  })
}

const get = alias => {
  return new Promise((resolve, reject) => {
    exec
      .shell(`./node_modules/.bin/now alias ls -t ${token} | grep ${alias}`)
      .then(result => {
        if (result.stdout) {
          // format: url.now.sh   alias.now.sh    time
          const url = result.stdout.split('.now.sh')[0].trim()
          info('NOW CD', `Found previous deployment instance: ${url}`)
          resolve(url)
        } else {
          info('NOW CD', 'No previous deployment instances')
          resolve(null)
        }
      })
      .catch(err => resolve(false)) // it fails when this url is not attached to a url
  })
}

module.exports = { getAlias: get, setAlias: set }
