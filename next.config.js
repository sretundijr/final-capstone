const webpack = require('webpack');

module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/troubleshooting-questionnaire': { page: '/troubleshooting-questionnaire' },
      '/thank-you': { page: '/thank-you' },
      '/advisor-dashboard': { page: '/advisor-dashboard' },
      '/view-questionnaire': { page: '/view-questionnaire' },
    };
  },
  webpack: (cfg) => {
    cfg.plugins.push(new webpack.DefinePlugin({
      'process.env.REACT_APP_API_BASE_URL': JSON.stringify(process.env.REACT_APP_API_BASE_URL),
    }));

    return cfg;
  },
};
