const mongoose = require('mongoose');

let favoritesSchema = new mongoose.Schema(
    {
        url: {type: String, unique: true},
        name: {type: String},
        title: {type: String, default: false},
        favorited: {type: Boolean, default: false}
    }   
)

module.exports = favoritesSchema;