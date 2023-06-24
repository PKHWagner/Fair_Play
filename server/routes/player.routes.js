const PlayerController = require('../controllers/player.controller');

module.exports = app => {
  app.post('/api/register', PlayerController.register);
  app.post('/api/login', PlayerController.login);
  app.post('/api/logout', PlayerController.logout);
  app.get('/api/players', PlayerController.getAll);
  app.get('/api/players/:id', PlayerController.getOne);
  app.patch('/api/players/:id', PlayerController.update);
  app.delete('/api/players/:id', PlayerController.delete);
}