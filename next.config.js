module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/home': { page: '/home' },
      '/troubleshooting-questionnaire': { page: '/troubleshooting-questionnaire' },
      '/thank-you': { page: '/thank-you' },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
    };
  },
};
