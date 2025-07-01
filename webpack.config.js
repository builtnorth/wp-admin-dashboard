const defaultConfig = require("@wordpress/scripts/config/webpack.config");

// Handle both array and object cases for @wordpress/scripts compatibility
const baseConfig = Array.isArray(defaultConfig)
    ? defaultConfig[0]
    : defaultConfig;

module.exports = {
    ...baseConfig,
    module: {
        ...baseConfig.module,
        rules: [
            ...baseConfig.module.rules,
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
