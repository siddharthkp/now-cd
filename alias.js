const { info, loading } = require('prettycli')
const { alias } = require('now-wrapper')

const set = async (deploymentURL, aliasURL) => {
  loading('NOW CD', 'Updating alias')
  const result = await alias.set(deploymentURL, aliasURL)
  info('NOW CD', result.url)
  return aliasURL
}

const get = async aliasURL => {
  const instance = alias.get(aliasURL)
  if (instance.url) {
    info('NOW CD', `Found previous deployment instance: ${instance.url}`)
    return instance
  } else {
    info('NOW CD', 'No previous deployment instances')
    return null
  }
}

module.exports = { getAlias: get, setAlias: set }
