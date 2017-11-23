
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BACKEND_URL': prod ? 'https://stark-scrubland-67367.herokuapp.com/api' : 'http://localhost:8080/api',
};
