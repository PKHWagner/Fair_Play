const PlayerController = require('../controllers/player.controller');

module.exports = app => {
  app.post('/api/register', PlayerController.register);
  app.post('/api/login', PlayerController.login);
  app.post('/api/logout', PlayerController.logout);
}