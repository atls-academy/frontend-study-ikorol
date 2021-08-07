/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const withAliases = (aliases, require) => (nextConfig) => ({
  ...nextConfig,
  webpack(config, options) {
    aliases.forEach(
      // eslint-disable-next-line
      (alias) => (config.resolve.alias[alias] = require.resolve(alias.replace('$', '')))
    )

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }

    return config
  },
})

module.exports = { withAliases }
