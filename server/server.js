const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const announcements = require('./routes/api/announcements');
const editTexts = require('./routes/api/editTexts');
const questions = require('./routes/api/questions');

const app = express();

// CORS config
app.use(cors());

// Bodyparser middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
    .set('useNewUrlParser', true)
    .set('useUnifiedTopology', true)
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use('/api/announcements', announcements);
app.use('/api/editTexts', editTexts);
app.use('/api/questions', questions);

//port configuration
const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port ' + port));