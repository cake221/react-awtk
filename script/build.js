// TODO: 脚本化

require("../src/nodePolyfill")
const webpackConfig = require("../webpack.config")

const args = require('minimist')(process.argv.slice(2))
const targets = args._


buildAll(targets)


async function buildAll(targets) {
  for (const target of targets) {
    await build(target)
  }
}


async function build(target) {

  await execa(
    'webpack',
    [
      '--config',
    ],
    { stdio: 'inherit' }
  )
  
}
