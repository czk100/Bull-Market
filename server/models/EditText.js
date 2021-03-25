const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema

const editTextSchema = Schema ({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = EditText = mongoose.model('editText', editTextSchema);