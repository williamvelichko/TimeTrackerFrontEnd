module.exports = {
  // Other configurations...

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"], // Add .scss extension
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Inject CSS into the DOM
          "css-loader", // Resolve @import and url() statements
          "sass-loader", // Compile SCSS to CSS
        ],
      },
    ],
  },
};
