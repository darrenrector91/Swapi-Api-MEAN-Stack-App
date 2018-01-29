const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const favoritesSchemaModule = require('./schema.module');

let favoritesSchema = favoritesSchemaModule;
let Favorite = mongoose.model('Favorite', favoritesSchema);

// POST route
router.post('/', (req, res) => {
    console.log('data to save: ', req.body);
    let favoriteAdd = new Favorite(req.body);
    favoriteAdd.save( (error, saved) => {
        if (error) {
            console.log('error on save: ', error);
            res.sendStatus(500);            
        } else {
            console.log('new favorite Document: ', saved);            
            res.sendStatus(201);
        }
    }); // end save
}); // end post route

// GET route
router.get('/', (req, res) => {
    Favorite.find({'add_favorite': 'true'}, (error, add_favorite) => {
        if(error) {
            console.log('error on find:', error);
            res.sendStatus(500);
        } else {
            console.log('found Favorite documents', add_favorite);
            res.send(add_favorite);
        }
    })
}); // end get 

// Delete favorite by id
router.delete('/:id', (req, res) => {
    let favdId = req.params.id;
    Favorite.findByIdAndRemove(
        {'_id': favdId},
        (error, removedDocument) => {
            if(error) {
                console.log('error on delete', error);
                res.sendStatus(500);
            } else {
                console.log('document has been removed', removedDocument);
                res.sendStatus(200);
            }
        });
}); // end delete route

router.get('/favoriteCount', (req,res)=>{
    Favorite.count({}, (error, favoriteCount) => {
        if(error) {
            console.log('error getting favorite count', error);
            res.sendStatus(500);
        } else {
            console.log('found favorite count: ', favoriteCount);
            let countFavorites = { count: favoriteCount}
            res.send(countFavorites);
        }
    });
});

module.exports = router;