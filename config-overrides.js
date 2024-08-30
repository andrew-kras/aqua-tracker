const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
    addWebpackModuleRule({
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
    })
);
