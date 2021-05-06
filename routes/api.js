const router = require("express").Router();
const { Workout, Exercise } = require("../models/");

//get all workouts.
router.get("/api/workouts", async (req, res) =>
{
    try
    {
        const getWorkout = await Workout.find({}).sort({ _id: -1 });
        if (getWorkout)
            res.json(getWorkout);
        else
            res.json({ message: "No Workout found with this search." });
    }
    catch (err)
    {
        res.status(500).json(err);
    }
});

//add an exercise to a workout
router.put("/api/workouts/:id", async ({ params, body }, res) =>
{
    try
    {
        const addExercise = await Workout.findOneAndUpdate(
            { _id: params.id },
            { $push: { exercises: await Exercise.create(body) } },
            { new: true });

        if (addExercise)
            res.json(addExercise);
        else
            res.json({ message: "No workout found please try again."});
    }
    catch (err)
    {
        res.status(500).json(err);
    }
});

//create a brand new workout
router.post("/api/workouts", async (req, res) =>
{
    try
    {
        const createNewWorkout = await Workout.create({ day: new Date() });

        if (createNewWorkout)
            res.json(createNewWorkout);
        else
            res.json({ message: "Could not create a new workout." });
    }
    catch (err)
    {
        res.status(500).json(err);
    }
});

router.get("/api/workouts/range", async (req, res) =>
{
    try
    {
        const workouts = await Workout.find({}).limit(7);

        if (workouts)
            res.json(workouts);
        else
            res.json({ message: "No workouts found within range." });
    }
    catch (err)
    {
        res.status(500).json(err);
    }
});

//Export router.
module.exports = router;