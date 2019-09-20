const path = require('path');

module.exports = {
    entry: {
        frontend: './dev/frontend/main.js',
        frontendStyles: '.dev/frontend/scss/stack.scss',
        backend: './dev/backend/index.js',
    },
    output: {
        filename: '[name]/bundle.js',
        path: __dirname + '/dist'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'public/frontend/js'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: 'env'
                    }
                }
            },
        ]
    },
    plugins: [
    ]
};