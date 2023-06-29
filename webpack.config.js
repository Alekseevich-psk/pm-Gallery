import path from "path";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
// import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import FileManagerPlugin from "filemanager-webpack-plugin";

export default {
    context: path.resolve("app"),
    entry: {
        style: "./scss/style.scss",
        ts: "./ts/index.ts",
    },
    devServer: {
        watchFiles: "app/",
        port: 9000,
    },
    output: {
        filename: "[name].js",
        path: path.resolve("dist"),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        new HtmlWebpackPlugin({
            template: "./html/index.html",
        }),
        new FileManagerPlugin({
            events: {
                onStart: {
                    delete: ["dist"],
                },
            },
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "images/",
                    to: "images/",
                },
            ],
        }),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
};
