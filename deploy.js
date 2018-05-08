const { info, loading } = require('prettycli')
const tokens = require('./tokens')

const { instance } = require('now-wrapper')

const deploy = _ => {
  return new Promise((resolve, reject) => {
    loading('NOW CD', 'Deployment started')
    instance.deploy().then(deployment => {
      if (deployment.error) reject(deployment.error)
      else {
        info('NOW CD', `Deployed to ${deployment.url}`)
        resolve(deployment.url)
      }
    })
  })
}

module.exports = deploy
