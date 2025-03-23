const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');
const webpack = require('webpack');

module.exports = override(config, env){
    config.resolve.fallback = { "buffer": require.resolve("buffer/") };

    // Provide a polyfill for the 'Buffer' object
    config.plugins.push(
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer']
        })
    );

    addWebpackAlias({
        stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer/")
    })
};
