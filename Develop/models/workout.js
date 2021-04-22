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
  name: {
    type: String,
    trim: true,
    required: "Enter a name for Workout"
  },
  exercises: [exerciseSchema],
  date: {
    type: Date,
    default: Date.now
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
const Workout = mongoose.model("Workout", workoutSchema);