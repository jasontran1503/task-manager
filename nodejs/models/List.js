const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listSchema = new Schema({
    listName: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true
    },
    tasks: [{ type: mongoose.Types.ObjectId, ref: 'Task' }]
}, {
    versionKey: false
});

module.exports = mongoose.model('List', listSchema);