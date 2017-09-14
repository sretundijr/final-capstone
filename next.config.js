module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/home': { page: '/home' },
      '/trouble-shooting-questionaire': { page: '/trouble-shooting-questionaire' },
      // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } }
    };
  },
};
