const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  gameDate: {
    type: Date,
    required: [true, 'Date is required!']
  },
  address: {
    type: String,
    required: [true, 'Address is required!'],
    minLength: [2, 'Address must be at least 2 characters long!']
  },
  city: {
    type: String,
    required: [true, 'City is required!'],
    minLength: [2, 'City must be at least 2 characters long!']
  },
  state: {
    type: String,
    required: [true, 'State is required!'],
    minLength: [2, 'State must be at least 2 characters long!'],
    maxLength: [2, 'State cannot be over 2 characters!']
  },
  zipCode: {
    type: String,
    required: [true, 'Zip Code is required!'],
    minLength: [5, 'Zip Code must be at least 5 characters long!'],
    maxLength: [5, 'Zip Code cannot be over 5 characters!']
  },
  setupTime: {
    type: String,
    required: [true, 'Setup Time is required!']
  },
  kickOffTime: {
    type: String,
    required: [true, 'Kick Off Time is required!']
  },
  players: {
    type: Array
  }

}, {timestamps: true});

const Game = mongoose.model('Game', GameSchema);
module.exports = Game;