const tokens = {
  now: process.env.NOW_CD_TOKEN,
  github: process.env.NOW_CD_GITHUB_TOKEN
}

process.env.NOW_TOKEN = tokens.github

module.exports = tokens
