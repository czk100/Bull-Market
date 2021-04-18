const express = require('express');
const router = express.Router();

//Item Model
const EditText = require('../../models/EditText');

// @route GET api/EditText
// @desc Get ALL Items
// @access Public
router.get('/', (req, res) => {
    EditText.find()
        .sort({date : -1})
        .then(items => res.json(items));
});

// @route POST api/EditText
// @desc Create An Item
// @access Admin
router.post('/', (req, res) => {
    const EditText = new Item({
        name: req.body.name,
        content: req.body.content
    });

    EditText.save()
        .then(editText => res.json(editText));
});


// @route PUT api/EditText
// @desc Edit An Item
// @access Admin
router.put('/', (req, res) => {
    EditText.findOne({name : req.body.name}, function(err, editData) {
        if(err)
        {
            console.log(err);
        }
        if(! editData)
        {
            res.json('no data');
        } else {
            editData.content = req.body.content;
            editData.save(function(err) {
                if(err)
                {
                    console.log(err);
                    res.json('edit save failed');
                } else {
                    res.json('edit Complete');
                }
            })
        }
    })
});

module.exports = router;