const { info, loading } = require('prettycli')
const { instance } = require('now-wrapper')

const remove = url => {
  return new Promise((resolve, reject) => {
    loading('NOW CD', `Removing previous instance: ${url}`)
    instance.remove(url).then(result => {
      if (result.stderr) reject(result.stderr)
      else {
        info('NOW CD', `Removed previous instance`)
        resolve(result.stdout)
      }
    })
  })
}

module.exports = remove
