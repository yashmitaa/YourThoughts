const mongoose = require('mongoose');

//init schema
const quoteSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        require: true
    },
    description:{
        type: String,
        trim: true,
        require: true
    }
});

//init

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
