const mongoose = require('../Config/database');

const gymnasticSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    units: {
        type: String,
        required: true,
        enum: ['повтори', 'хвилини'],
        default: 'повтори'
    }
});

module.exports = gymnasticSchema;