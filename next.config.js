module.exports = {
  reactStrictMode: true,
}
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // optional: you can modify antd less variables directly here
  // Or better still you can specify a path to a file 
  lessVarsFilePath: './styles/variables.less',
  // optional
  lessVarsFilePathAppendToEndOfContent: true,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },
});
