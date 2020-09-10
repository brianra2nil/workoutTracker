const { model, Schema } = require('mongoose')

const Exercise = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  type: {
    type: String,
    unique: true,
    required: true
  },
  weight: {
    type: String,
    unique: true,
    required: true
  },
  sets: {
    type: String,
    unique: true,
    required: true
  },
  reps: {
    type: String,
    unique: true,
    required: true
  },
  duration: {
    type: String,
    unique: true,
    required: true
  },
  distance: {
    type: String,
    unique: true,
    required: false
  },
  
}, { timestamps: true })

module.exports = model('Exercise', Exercise)
