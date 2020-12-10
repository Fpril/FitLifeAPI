const workoutController = require('../Controllers/workout.controller');

module.exports = router => {
    router.post('/create', workoutController.createWorkout);
    router.get('/read', workoutController.getWorkouts);
    router.get('/read/:id', workoutController.getWorkout);
    router.put('/update/:id', workoutController.updateWorkout);
    router.delete('/delete/:id', workoutController.removeWorkout);
}