const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require ('bcrypt');

const PlayerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required!'],
    minLength: [2, 'First name must be at least 2 characters long!']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required!'],
    minLength: [2, 'Last name must be at least 2 characters long!']
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
  sport:{
    type: String,
    required: [true, 'Sport is required!'],
    enum: [
      'Soccer',
      'Basketball',
      'Football',
      'Baseball',
      'Hockey'
    ]
  },
  position:{
    type: String,
    required: [true, 'Position is required!'],
    enum: [
      "Goalkeeper",
      "Full-back",
      "Center-back",
      "Defensive Midfielder",
      "Midfielder",
      "Attacking Midfielder",
      "Winger",
      "Striker"
    ]
  },
  skillLevel: {
    type: Number,
    required: [true, 'Skill Level is required!'],
  },
  email: {
    type: String,
    required: [true, 'Email is required!'],
    unique: [true, 'Email already exists!'],
    validate: [isEmail, "Please enter a valid email!"]
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
    minLength: [8, 'Password must be at least 8 characters long!']
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  minutes: {
    type: Number,
    min: [0, "Minutes cannot be a negative number!"]
    
  },
  goals: {
    type: Number,
    min: [0, "Goals cannot be a negative number!"]
  },
  assists: {
    type: Number,
    min: [0, "Assists cannot be a negative number!"]
  },
  yellowCards: {
    type: Number,
  },
  redCard: {
    type: Number
  }

}, {timestamps: true});

PlayerSchema.virtual('confirmPassword')
  .get(() => this._confirmPassword)
  .set((value) => this._confirmPassword = value);

  PlayerSchema.pre('validate', function (next){
    if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
  });

  PlayerSchema.pre('save', function (next){
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
      });
  });
  
  const Player = mongoose.model('Player', PlayerSchema);
  module.exports = Player;