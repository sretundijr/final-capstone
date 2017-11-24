
const webpack = require('webpack');

module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/troubleshooting-questionnaire': { page: '/troubleshooting-questionnaire' },
      '/thank-you': { page: '/thank-you' },
      '/advisor-dashboard': { page: '/advisor-dashboard' },
      '/view-questionnaire': { page: '/view-questionnaire' },
      '/auth-callback': { page: '/auth-callback' },
    };
  },
  webpack: (cfg) => {
    cfg.plugins.push(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }));

    return cfg;
  },
};

