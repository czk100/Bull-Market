const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const items = require('./routes/api/items');
const editTexts = require('./routes/api/editTexts');

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

app.use('/api/items', items);
app.use('/api/editTexts', editTexts);

//port configuration
const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port ' + port));