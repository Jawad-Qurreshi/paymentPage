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

creditSchema.pre('save', (next) => {
    const digit = cardNumber.split('')[0];
    if (digit === '5')
        type = 'Master'
    else if (digit === '4')
        type = 'Visa'
    else
        type = 'Others'
    next();

});

module.exports = mongoose.model('creditcard', creditSchema);