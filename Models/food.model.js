const mongoose = require('../Config/database');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    'kcal per 100 grams': {
        type: Number,
        required: true,
        min: 0
    }
});

module.exports = foodSchema;