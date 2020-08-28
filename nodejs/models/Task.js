const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskName: {
        type: String,
        trim: true,
        minlength: 1,
        required: true
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