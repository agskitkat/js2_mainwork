const path = require('path');

module.exports = {
    entry: [
        './dev/main.js'
    ],
    output: {
        filename: 'bundle.js',
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'public/js'),
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