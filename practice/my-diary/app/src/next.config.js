const { withWorkspaces } = require('@atls/next-config-with-pnp-workspaces')
const withPlugins = require('next-compose-plugins')
const { withAliases } = require('./helpers')
const { withFutureWebpack5 } = require('./helpers')

module.exports = withPlugins([
  withWorkspaces,
  withFutureWebpack5,
  withAliases(['react-intl', '@emotion/react', '@emotion/styled'], require),
])
