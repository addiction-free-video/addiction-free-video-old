const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
        settings: './src/settings.js',
        policy: './src/policy.js',
    },
    watch: true,
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'www/dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.raw\.js$|\.raw\.css$/i,
                use: 'raw-loader',
            },
        ],
    },
};
