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
app.use(bodyParser.urlencoded({ extended: false }));

//Models
const CreditCardPayment = require('./models/creditcard-payment-model');
const DebitCardPayment = require('./models/debitcard-payment-model');
const PaypalPayment = require('./models/paypal-payment-model');


app.post('/card/credit', (req, res) => {
    const body = req.body;
    const creditPayment = new CreditCardPayment({
        email: body.email,
        name: body.name,
        cardName: body.cardName,
        expiration: body.expiration,
        cvv: body.cvv
    });

    creditPayment.save()
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

app.post('/card/debit', (req, res) => {
    const body = req.body;
    const debitPayment = new DebitCardPayment({
        cardName: body.cardName,
        expiration: body.expiration,
        cvv: body.cvv
    });
    debitPayment.save()
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