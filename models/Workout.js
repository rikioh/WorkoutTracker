const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
    {
        name: String,
        type: String,
        weight: Number,
        sets: Number,
        reps: Number,
        distance: Number,
        duration: Number
    });
    

const workoutSchema = new Schema({
  day:
  {
      type: Date,
      unique: true
  },
  exercises: [exerciseSchema]
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
const Workout = mongoose.model("Workout", workoutSchema);


module.exports = {Exercise, Workout}

