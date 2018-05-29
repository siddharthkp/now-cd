const exec = require('execa')
const { info, loading } = require('prettycli')
const tokens = require('./tokens')
const command = require('./command')

const deploy = _ => {
  return new Promise((resolve, reject) => {
    loading('NOW CD', 'Deployment started')
    exec.shell(command(`now`)).then(result => {
      if (result.stdout) {
        let url = result.stdout
        info('NOW CD', `Deployed to ${url}`)
        // follow same pattern throughout the app
        url = url.replace('https://', '').replace('.now.sh', '')
        resolve(url)
      } else reject(result.stderr)
    })
  })
}

module.exports = deploy
