const mongoose = require('mongoose');
const Shcema = mongoose.Schema;

const debitSchema = new Shcema({
    cardName: { type: String, required: true },
    expiration: { type: Date, required: true },
    cvv: { type: Number, required: true }
});
module.exports = mongoose.model('debitcard', debitSchema);