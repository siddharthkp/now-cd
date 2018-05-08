const exec = require('execa')
const { info, loading } = require('prettycli')
const command = require('./command')

const set = (deploymentURL, aliasURL) => {
  return new Promise((resolve, reject) => {
    loading('NOW CD', 'Updating alias')
    alias.set(deploymentURL, aliasURL).then(result => {
      if (result.error) reject(result.error)
      else {
        info('NOW CD', result.url)
        resolve(aliasURL)
      }
    })
  })
}

const get = aliasURL => {
  return new Promise((resolve, reject) => {
    exec
      .shell(command(`now alias ls`))
      .then(result => {
        if (result.stdout) {
          // format: url.now.sh   alias.now.sh    time
          const aliasRow = result.stdout.split('\n').filter(u => u.includes(aliasURL))[0]
          const url = aliasRow.split('.now.sh')[0].trim()
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
