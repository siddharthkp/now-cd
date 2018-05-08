const { info, loading } = require('prettycli')
const tokens = require('./tokens')

const { instance } = require('now-wrapper')

const deploy = _ => {
  return new Promise((resolve, reject) => {
    loading('NOW CD', 'Deployment started')
    instance.deploy().then(deployment => {
      console.log(deployment)
      if (deployment.error) reject(deployment.error)
      else {
        let url = deployment.url
        info('NOW CD', `Deployed to ${url}`)
        // follow same pattern throughout the app
        url = url.replace('https://', '').replace('.now.sh', '')
        resolve(url)
      }
    })
  })
}

module.exports = deploy
