const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/scripts/index.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/templates/index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public/"),
          to: path.resolve(__dirname, "dist/"),
        },
      ],
    }),
    new WebpackPwaManifest({
      name: "Urban Kitchen PWA",
      short_name: "Urban Kitchen",
      description: "A restaurant catalog apps",
      background_color: "#ffffff",
      theme_color: "#2a2f4f",
      display: "standalone",
      orientation: "any",
      ios: true,
      start_url: "./index.html",
      publicPath: "./",
      filename: "app.webmanifest",
      icons: [
        {
          src: path.resolve(__dirname, "src/public/images/logo.png"),
          sizes: [120, 152, 167, 180, 1024],
          destination: path.join("icons", "ios"),
          ios: true,
        },
        {
          src: path.resolve(__dirname, "src/public/images/logo.png"),
          size: 1024,
          destination: path.join("icons", "ios"),
          ios: "startup",
        },
        {
          src: path.resolve(__dirname, "src/public/images/logo.png"),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          destination: path.join("icons", "android"),
        },
      ],
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 50,
          },
        },
      ],
      overrideExtension: true,
    }),
  ],
};
