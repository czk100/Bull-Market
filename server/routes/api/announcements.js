const express = require('express');
const router = express.Router();

//Announcement Model
const Item = require('../../models/Announcement');

// @route GET applicaitons
// @desc Get ALL Announcement
// @access Public
router.get('/', (req, res) => {
    Announcement.find()
        .sort({date : -1})
        .then(items => res.json(items));
});

// @route POST api/items
// @desc Create An Announcement
// @access Public
router.post('/', (req, res) => {
    const newAnnouncement = new Item({
        name: req.body.name,
        content: req.body.content
    });

    newAnnouncement.save()
        .then(announcement => res.json(announcement));
});


// Deletes are weird, not implemented yet

// @route DELETE api/items/:id
// @desc Delete A Announcement
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove()
        .then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;