const express = require('express');
const router = express.Router();

//Announcement Model
const Question = require('../../models/Question');

// @route GET applicaitons
// @desc Get ALL Announcement
// @access Public
router.get('/', (req, res) => {
    Question.find()
        .sort({date : -1})
        .then(items => res.json(items));
});


// @route POST api/Announcement
// @desc Create An Announcement
// @access Public
router.post('/', (req, res) => {
    const newQuestion = new Question({
        question: req.body.question,
        answer: req.body.answer
    });

    newQuestion.save()
        .then(question => res.json(question));
});

module.exports = router;