const { info, loading } = require('prettycli')
const { instance } = require('now-wrapper')

const remove = async instanceURL => {
  loading('NOW CD', `Removing previous instance: ${instanceURL}`)
  const result = await instance.remove(instanceURL)

  info('NOW CD', `Removed previous instance`)
  resolve(result.stdout)
}

module.exports = remove
