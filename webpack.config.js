const TerserPlugin = require('terser-webpack-plugin');

const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,  // removes console.log
            drop_debugger: true, // removes debugger statements
          },
          mangle: true,         // shortens variable names
          output: {
            comments: false,    // removes comments
          },
        },
      }),
    ],
  },
  plugins: [
    new WebpackObfuscator(
      {
        rotateStringArray: true,
        stringArray: true,
        stringArrayEncoding: ['rc4'],
      },
      ['excluded_file.js']
    ),
  ],
}; 