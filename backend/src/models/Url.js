const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    urlCode: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Url', UrlSchema);
