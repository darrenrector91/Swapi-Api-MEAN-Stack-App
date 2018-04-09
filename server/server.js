const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const favoritesRouter = require('./routes/favorites.router');
const mongoose = require('mongoose');

/** ---------- MIDDLEWARE ---------- **/
app.use(express.static('server/public/'));
app.use(bodyParser.json()); // needed for angular requests

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/favorites', favoritesRouter);

// Mongo Connection //
var mongoURI = '';
// process.env.MONGODB_URI will only be defined if you
// are running on Heroku
if(process.env.MONGOLAB_BROWN_URI != undefined) {
    // use the string value of the environment variable
    // mongoURI = process.env.MONGODB_URI;
    mongoURI = process.env.MONGOLAB_BROWN_URI;
} else {
    // use the local database server
    mongoURI = 'mongodb://localhost:27017/swapi-api-app';
}

/** ---------- MONGOOSE ------------ **/
const databaseUrl = 'mongodb://localhost:27017/swapi-api-app'

// connect to mongoDB
// mongoose.connect(databaseUrl);
mongoose.connect(mongoURI, {
    useMongoClient: true
});

// optional output from connection events
mongoose.connection.on('connected', () => {
	console.log('mongoose is connected');
});

mongoose.connection.on('error', () => {
	console.log('mongoose connection failed');
});

/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
	console.log('Listening on port: ', app.get('port'));
});
