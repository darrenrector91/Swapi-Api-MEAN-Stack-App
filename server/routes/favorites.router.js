const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

let favorites = new mongoose.Schema({
    url: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        default: false
    },
    title: {
        type: String,
        // default: false
    },
    add_favorite: {
        type: Boolean,
        default: false
    }
})

let Favorite = mongoose.model('Favorite', favorites);

// POST route
router.post('/', (req, res) => {
    console.log('data to save: ', req.body);
    let favoriteAdd = new Favorite(req.body);
    favoriteAdd.save((error, saved) => {
        if (error) {
            console.log('save error: ', error);
            res.sendStatus(500);
        } else {
            console.log('favorite post: ', saved);
            res.sendStatus(201);
        }
    }); // end save
}); // end post route

// GET route
router.get('/', (req, res) => {
    Favorite.find({
        'add_favorite': 'true'
    }, (error, add_favorite) => {
        if (error) {
            console.log('favorite error:', error);
            res.sendStatus(500);
        } else {
            console.log('favorite get', add_favorite);
            res.send(add_favorite);
        }
    })
}); // end get 

// Delete favorite by id
router.delete('/:id', (req, res) => {
    let favId = req.params.id;
    console.log('in delete router');
    Favorite.findByIdAndRemove({
            '_id': favId
        },
        (error, removedDocument) => {
            if (error) {
                console.log('delete', error);
                res.sendStatus(500);
            } else {
                console.log('deleted success', removedDocument);
                res.sendStatus(200);
            }
        });
}); // end delete route

router.get('/favoriteCount', (req, res) => {
    Favorite.count({}, (error, favoriteCount) => {
        if (error) {
            console.log('error favorite count', error);
            res.sendStatus(500);
        } else {
            console.log('found favorite count: ', favoriteCount);
            let countFavorites = {
                count: favoriteCount
            }
            res.send(countFavorites);
        }
    });
});

module.exports = router;