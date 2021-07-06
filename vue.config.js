// const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
// module.exports = {
//   configureWebpack: () => ({
//     entry: './src/entry-server.js',
//     devtool: 'source-map',
//     target: 'node',
//     output: {
//       libraryTarget: 'commonjs2'
//     },
//     plugins: [new VueSSRServerPlugin()]
//   }),
//   chainWebpack: config => {
//     config.optimization.splitChunks(undefined)
//     config.module.rule('vue').use('vue-loader')
//   }
// }
