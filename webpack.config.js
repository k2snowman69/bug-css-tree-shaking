const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  return [
    {
      mode: "production",
      module: {
        rules: [
          {
            // CSS files are often imported using `import 'styles.scss'` which implies
            // that they have side effects
            sideEffects: true,
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/react"],
              },
            },
          },
          {
            // CSS files are often imported using `import 'styles.scss'` which implies
            // that they have side effects
            sideEffects: true,
            test: /\.css$/,
            use: [
              // MiniCssExtractPlugin is not necessary to replicate this issue.
              // I added it as it is easier to view the order of the generated CSS.
              // However, you can still see the issue by searching for the generated
              // class names in the .js bundle. They're still out of order.
              MiniCssExtractPlugin.loader,
              "css-loader",
            ],
          },
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css",
        }),
      ],
    },
  ];
};
