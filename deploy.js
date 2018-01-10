const exec = require('execa')
const { info, loading } = require('prettycli')
const token = require('./token')

const deploy = _ => {
  return new Promise((resolve, reject) => {
    loading('NOW CD', 'Deployment started')
    exec.shell(`now -t ${token}`).then(result => {
      if (result.stderr) reject(result.stderr)
      else {
        let url = result.stdout
        info('NOW CD', `Deployed to ${url}`)
        // follow same pattern throughout the app
        url = url.replace('https://', '').replace('.now.sh', '')
        resolve(url)
      }
    })
  })
}

module.exports = deploy
