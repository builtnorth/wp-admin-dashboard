const defaultConfig = require("@wordpress/scripts/config/webpack.config");

module.exports = {
    ...defaultConfig,
    module: {
        ...defaultConfig.module,
        rules: [
            ...defaultConfig.module.rules,
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: require.resolve("babel-loader"),
                    options: {
                        presets: [
                            require.resolve("@babel/preset-env"),
                            require.resolve("@babel/preset-react"),
                        ],
                        cacheDirectory: true,
                    },
                },
            },
        ],
    },
};
