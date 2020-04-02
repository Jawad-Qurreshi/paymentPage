const mongoose = require('mongoose');
const Shcema = mongoose.Schema;

const paypalSchema = new Shcema({

});


module.exports = mongoose.model('paypalpayment', paypalSchema);