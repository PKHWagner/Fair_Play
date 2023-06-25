const Game = require('../models/game.model');


module.exports = {

  createGame: (req, res) => {
    Game.create(req.body)
    .then(newGame => res.status(201).json(newGame))
    .catch(err => res.status(400).json({msg:"COULD NOT CREATE GAME--->", err}));
  },

  getAllGames: (req, res) => {
    Game.find({})
    .then(allGames => res.json(allGames))
    .catch(err => res.status(400).json({msg: "COULD NOT GET ALL GAMES--->",err}));
  },

  getOneGame: (req, res) => {
    Game.findById(req.params.id)
    .then(oneGame => res.json(oneGame))
    .catch(err => res.status(400).json({msg: "COULD NOT GET ONE GAME--->", err}));
  },

  updateGame: (req, res) => {
    Game.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
    .then(updateGame => res.status(202).json(updateGame))
    .catch(err => res.status(400).json({msg: "COULD NOT UPDATE GAME--->", err}));
  },

  deleteGame: (req, res) => {
    Game.findByIdAndDelete(req.params.id)
    .then(deleteGame => res.status(202).json(deleteGame))
    .catch(err => res.status(400).json({msg: "COULD NOT DELETE GAME--->", err}));
  }

}