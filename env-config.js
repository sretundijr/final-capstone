
const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BACKEND_URL': prod ? 'https://stark-scrubland-67367.herokuapp.com/api' : 'http://localhost:8080/api',
};

module.exports = {
  'process.env.Auth0_URL': prod ? 'https://www.technician-assist.com/auth-callback' : 'http://localhost:3000/auth-callback',
};
