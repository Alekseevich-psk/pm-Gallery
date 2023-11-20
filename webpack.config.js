const path = require("path");
const fs = require("fs");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const pagesPug = fs.readdirSync("app/pug/").filter((fileName) => fileName.endsWith(".pug"));

module.exports = {
    entry: {
        style: "./app/scss/style.scss",
        "pm-gallery-style": "./app/scss/pm-gallery.scss",
        "pm-gallery": "./app/ts/pm-gallery.ts",
        index: "./app/scripts/index.js",
    },
    output: {
        library: {
            name: "PmGallery",
            type: "umd",
            export: "default",
        },
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devServer: {
        watchFiles: "app/",
        port: 9000,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        ...pagesPug.map(
            (page) =>
                new HtmlWebpackPlugin({
                    template: `app/pug/${page}`,
                    filename: `./${page.replace(/\.pug/, ".html")}`,
                })
        ),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "./app/images/",
                    to: "./images/",
                },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.pug$/i,
                use: ["pug-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                    {
                        loader: "markdown-loader",
                        options: {},
                    },
                ],
            },
        ],
    },
};
