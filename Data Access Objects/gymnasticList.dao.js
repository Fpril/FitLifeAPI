const mongoose = require('../Config/database');
const gymnasticListSchema = require('../Models/gymnasticList.model');

gymnasticListSchema.statics = {
    create: function (data, cb) {
        const gymnasticList = new this(data);
        gymnasticList.save(cb);
    },

    read: function (query, cb) {
        this.find(query, cb);
    },

    update: function (query, updateData, cb) {
        this.findOneAndUpdate(query, updateData, {new: true}, cb);
    },

    delete: function (query, cb) {
        this.findOneAndDelete(query, cb);
    }
}

module.exports = mongoose.model('Gymnastic List', gymnasticListSchema);