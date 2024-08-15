const CompressionPlugin = require('compression-webpack-plugin');

module.exports = function override(config, env) {
  if (env === 'production') {
    config.plugins.push(
      new CompressionPlugin({
        test: /\.(js|css|html|svg)$/,
        threshold: 10240, // Only assets bigger than this size will be compressed, in bytes
        minRatio: 0.8, // Only assets that compress to less than 80% of their original size will be compressed
      })
    );
  }
  return config;
};
