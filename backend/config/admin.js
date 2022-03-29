module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e2dc6c914ce780733808aed93863f106'),
  },
});
