module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/home': { page: '/home' },
      '/troubleshooting-questionaire': { page: '/troubleshooting-questionaire' },
      // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
    };
  },
};
