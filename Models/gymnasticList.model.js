const mongoose = require('../Config/database');

const gymnasticListSchema = new mongoose.Schema({
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
}, {
    timestamps: true
});

module.exports = gymnasticListSchema;