const mongoose = require('../Config/database');

const workoutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    gymnastics: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Gymnastic',
            required: true,
            unique: true
        },
        times: {
            type: Number,
            min: 0,
            required: true,
            unique: true
        }
    }]
});

module.exports = workoutSchema;