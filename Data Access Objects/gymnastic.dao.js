const mongoose = require('../Config/database');
const gymnasticSchema = require('../Models/gymnastic.model');

gymnasticSchema.statics = {
    create: function (data, cb) {
        const gymnastic = new this(data);
        gymnastic.save(cb);
    },

    read: async function (query, cb) {
        await this.find(query, cb);
    },

    update: function (query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData}, {new: true}, cb);
    },

    delete: function (query, cb) {
        this.findOneAndDelete(query, cb);
    }
}

module.exports = mongoose.model('Gymnastic', gymnasticSchema);