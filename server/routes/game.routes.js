const GameController = require('../controllers/game.controller');

module.exports = app => {
  app.post('/api/games', GameController.createGame);
  app.get('/api/games', GameController.getAllGames);
  app.get('/api/games/:id', GameController.getOneGame);
  app.patch('/api/games/:id', GameController.updateGame);
  app.delete('/api/games/:id', GameController.deleteGame);
}