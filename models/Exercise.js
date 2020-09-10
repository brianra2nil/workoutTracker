const { model, Schema } = require('mongoose')

const Exercise = new Schema({
  name: {
    type: String,
    unique: false,
    required: true
  },
  type: {
    type: String,
    unique: false,
    required: true
  },
  weight: {
    type: Number,
    unique: false,
    required: true
  },
  sets: {
    type: Number,
    unique: false,
    required: true
  },
  reps: {
    type: Number,
    unique: false,
    required: true
  },
  duration: {
    type: Number,
    unique: false,
    required: true
  },
  distance: {
    type: Number,
    unique: false,
    required: false
  },
  
}, { timestamps: true })

module.exports = model('Exercise', Exercise)
