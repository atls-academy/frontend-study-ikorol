const path = require('path')
const _a = require('customize-cra')

const { override } = _a
const { babelInclude } = _a

module.exports = function (config, env) {
  return Object.assign(
    config,
    override(babelInclude([path.resolve('src'), path.resolve('./site'), path.resolve('./ui')]))(
      config,
      env
    )
  )
}
