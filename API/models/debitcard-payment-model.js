const mongoose = require('mongoose');
const Shcema = mongoose.Schema;

const debitSchema = new Shcema({
    cardName: { type: String, required: true },
    cardNumber: String,
    expiration: { type: Date, required: true },
    cvv: { type: Number, required: true },
    type: { type: String, default: 'Others' }
});


module.exports = mongoose.model('debitcard', debitSchema);