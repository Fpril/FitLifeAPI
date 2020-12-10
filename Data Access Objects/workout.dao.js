const mongoose = require('../Config/database');
const workoutSchema = require('../Models/workout.model');

workoutSchema.statics = {
    create: function (data, cb) {
        const workout = new this(data);
        workout.save(cb);
    },

    read: function (query, cb) {
        this.find(query, cb);
    },

    update: function (query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData}, {new: true}, cb);
    },

    delete: function (query, cb) {
        this.findOneAndDelete(query, cb);
    }
}

module.exports = mongoose.model('Workout', workoutSchema);