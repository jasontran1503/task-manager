const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskName: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    listId: {
        type: mongoose.Types.ObjectId,
        ref: 'List',
        required: true
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Task', taskSchema);