const mongoose = require('mongoose');
const Shcema = mongoose.Schema;

const creditSchema = new Shcema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    cardName: { type: String, required: true },
    cardNumber: { type: String, required: true },
    expiration: { type: Date, required: true },
    cvv: { type: Number, required: true },
    type: { type: String, default: '' }
});


module.exports = mongoose.model('creditcard', creditSchema);