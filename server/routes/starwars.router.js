const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Define our Schema- how an object should look when stored in our collection
let starWarsSchema = new mongoose.Schema(  
      //schema method takes in an object.
    {
        name: {type: String, unique: true, required: true},
        maxPlayers: Number,
        publishedDate: Date,
        voteCount: {type: Number, default: 0}
        
    }
);//end Schema

//Define our Model
let StarWarsFavorite = mongoose.model('starWarsFavorite', starWarsSchema);  //define our model, give it a name and pass in the schema.