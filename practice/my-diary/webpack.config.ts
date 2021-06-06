import HTMLWebpackPlugin from 'html-webpack-plugin'
import template          from 'html-webpack-template'
import path              from 'path'

export const mode = 'development'
export const entry = ['./app/src/index']
export const output = {
  path: `${__dirname}/dist`,
  filename: 'bundle.js',
}

export const plugins = [
  new HTMLWebpackPlugin({
    inject: false,
    template,
    appMountId: 'root',
    title: 'My diary',
    scripts: ['bundle.js'],
    // @ts-ignore
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    ],
  }),
]

export const devServer = {
  contentBase: path.join(__dirname, 'dist'),
  compress: true,
  port: 9000,
  open: true,
}

export const module = {
  rules: [
    {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
      },
    },
  ],
}

export const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.json'],
}
