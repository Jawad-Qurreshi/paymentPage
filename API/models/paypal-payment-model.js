const mongoose = require('mongoose');
const Shcema = mongoose.Schema;

const paypalSchema = new Shcema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('paypalpayment', paypalSchema);