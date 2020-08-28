module.exports = {
    entry: {
        main: "./src/main.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [[
                            "@babel/plugin-transform-react-jsx",
                            //{pragma: "React.createElement"}
                        ]]
                    }
                }
            }
        ]
    },
    mode: "development",
    optimization: {
        minimize: false
    }
}