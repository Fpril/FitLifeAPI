const workoutModel = require('../Data Access Objects/workout.dao');

exports.createWorkout = (request, response, next) => {
    try {
        const workout = request.body.workout;
    
        workoutModel.create(workout, (err, workout) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    message: "Workout created successfully"
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.getWorkouts = (request, response, next) => {
    try {
        workoutModel.read({}, (err, workouts) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    workouts: workouts
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.getWorkout = (request, response, next) => {
    try {
        workoutModel.read({name: request.params.name}, (err, workout) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    workout: workout
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.updateWorkout = (request, response, next) => {
    try {
        const workout = request.body.workout;
    
        workoutModel.update({_id: request.params.id}, workout, (err, workout) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    message: "Workout updated successfully",
                    workout: workout
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}

exports.removeWorkout = (request, response, next) => {
    try {
        workoutModel.delete({_id: request.params.id}, (err, workout) => {
            if (err) {
                response.json({
                    error: err
                });
            } else {
                response.json({
                    message: "Workout deleted successfully",
                    workout: workout
                });
            }
        });
    } catch (err) {
        response.json({
            error: err
        });
    }
}