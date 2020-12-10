const mongoose = require('../Config/database');

const foodListSchema = new mongoose.Schema({
    food: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food',
            required: true,
            unique: true
        },
        grams: {
            type: Number,
            required: true,
            min: 0
        }
    }]
}, {
    timestamps: true
});

module.exports = foodListSchema;