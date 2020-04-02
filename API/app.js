const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/card/credit', (req, res) => {

});

app.post('/card/debit', (req, res) => {

});

app.post('/paypal', (req, res) => {

});

app.post('/banking/intenet', (req, res) => {

});

module.exports = app;