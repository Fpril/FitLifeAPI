const mongoose = require('../Config/database');
const foodSchema = require('../Models/food.model');

foodSchema.statics = {
    create: function (data, cb) {
        const food = new this(data);
        food.save(cb);
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

module.exports = mongoose.model('Food', foodSchema);