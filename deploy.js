const { info, loading } = require('prettycli')
const tokens = require('./tokens')

const { instance } = require('now-wrapper')

const deploy = async () => {
  loading('NOW CD', 'Deployment started')
  const deployment = await instance.deploy()
  info('NOW CD', `Deployed to ${deployment.url}`)
  return deployment
}

module.exports = deploy
