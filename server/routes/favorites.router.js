const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const favoritesSchema = require('./schema.router.js')

//Define our Model
let Favorite = mongoose.model('Favorite', favoritesSchema);  //define our model, give it a name and pass in the schema.

module.exports = router;
