const Player = require('../models/player.model');
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {

  register: async(req, res) => {
    try{
      const potentialPlayer = await Player.findOne({email: req.body.email});
      if (potentialPlayer) {
        return res.status(400).json({
          message: "Email already in use!"
        });
      }
      const newPlayer = await Player.create(req.body);
      const playerToken = jwt.sign({_id: newPlayer._id, email: newPlayer.email},
      secret, {expiresIn: '2h'});
      res.cookie('playerToken', playerToken, {httpOnly: true}).json({
        message: 'Success',
        player: newPlayer
      });
    }
    catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },

  login: async(req, res) => {
    try{
      const player = await Player.findOne({email: req.body.email});
      if (player){
        const passwordMatch = await bcrypt.compare(req.body.password, player.password);
        if (passwordMatch){
          const playerToken = jwt.sign({_id: player._id, email: player.email}, secret, {expiresIn: "2h"});
          res.cookie("playerToken", playerToken, secret, {httpOnly: true}).json({
            message: 'Success', player: player
          });
        }
        else{
          res.status(400).json({
            message: "Invalid Login attempt"
          });
        }
      } else {
        res.status(400).json({
          message: "Invalid Login attempt"
        });
      }
    }
    catch (err) {
      return res.json(err);
    }
  },

  logout: (req, res) => {
    res.clearCookie('playerToken');
    res.sendStatus(200);
  }
}