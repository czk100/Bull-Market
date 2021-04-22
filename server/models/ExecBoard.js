const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema

const execBoardSchema = Schema ({
    position: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    linkedIn: {
        type: String,
        required: false
    }
});

module.exports = ExecBoard = mongoose.model('execBoard', execBoardSchema);