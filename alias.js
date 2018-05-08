const { info, loading } = require('prettycli')

const { alias } = require('now-wrapper')

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
    alias.get(aliasURL).then(result => {
      if (result.url) {
        info('NOW CD', `Found previous deployment instance: ${url}`)
        resolve(result.url)
      } else {
        info('NOW CD', 'No previous deployment instances')
        resolve(null)
      }
    })
  })
}

module.exports = { getAlias: get, setAlias: set }
