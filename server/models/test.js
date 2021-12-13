const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    text:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Test', testSchema);