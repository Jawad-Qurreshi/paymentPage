const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

//initializing
const app = express();
//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

//Models
const CreditCardPayment = require('./models/creditcard-payment-model');
const DebitCardPayment = require('./models/debitcard-payment-model');
const PaypalPayment = require('./models/paypal-payment-model');

//Database
const db = require('./database');

db.connect();


app.post('/card/credit', (req, res) => {
    const body = req.body;
    const creditPayment = new CreditCardPayment({
        email: body.email,
        name: body.name,
        cardName: body.cardName,
        expiration: body.expiration,
        cvv: body.cvv,
        cardNumber: body.cardNumber,
        type: ''
    });
    const digit = creditPayment.cardNumber.split('')[0];
    console.log(digit);
    if (digit === '5')
        creditPayment.type = 'Master'
    else if (digit === '4')
        creditPayment.type = 'Visa'
    else
        creditPayment.type = 'Others'

    creditPayment.save()
        .then(stored => {
            res.status(201).json({
                isSuccess: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                isSuccess: false,
                message: 'INTERNAL_ERROR'
            });
        });
});

app.post('/card/debit', (req, res) => {
    const body = req.body;
    const debitPayment = new DebitCardPayment({
        cardName: body.cardName,
        expiration: body.expiration,
        cvv: body.cvv,
        cardNumber: body.cardNumber,
        type: ''
    });
    const digit = debitPayment.cardNumber.split('')[0];
    console.log(digit);
    if (digit === '5')
        debitPayment.type = 'Master'
    else if (digit === '4')
        debitPayment.type = 'Visa'
    else
        debitPayment.type = 'Others'
    debitPayment.save()
        .then(stored => {
            res.status(201).json({
                isSuccess: true
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                isSuccess: false,
                message: 'INTERNAL_ERROR'
            });
        });
});

app.post('/paypal', (req, res) => {
    const body = req.body;

    const paypalPayment = new PaypalPayment({
        email: body.email,
        password: body.password
    });

    paypalPayment.save()
        .then(stored => {
            res.status(201).json({
                isSuccess: true
            });
        })
        .catch(err => {
            res.status(500).json({
                isSuccess: false,
                message: 'INTERNAL_ERROR'
            });
        });
});


app.get('/admin/card/credit', (req, res) => {

    CreditCardPayment.find({})
        .then(result => {
            res.status(200).json({
                isSuccess: true,
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({
                isSuccess: false,
                message: 'INTERNAL_ERROR'
            });
        });

});

app.get('/admin/card/debit', (req, res) => {

    DebitCardPayment.find({})
        .then(result => {
            res.status(200).json({
                isSuccess: true,
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({
                isSuccess: false,
                message: 'INTERNAL_ERROR'
            });
        });

});

app.get('/admin/paypal', (req, res) => {

    PaypalPayment.find({})
        .then(result => {
            res.status(200).json({
                isSuccess: true,
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({
                isSuccess: false,
                message: 'INTERNAL_ERROR'
            });
        });

})

module.exports = app;