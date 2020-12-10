const mongoose = require('../Config/database');
const foodListSchema = require('../Models/foodList.model');

foodListSchema.statics = {
    create: function (data, cb) {
        const foodList = new this(data);
        foodList.save(cb);
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

module.exports = mongoose.model('Food List', foodListSchema);