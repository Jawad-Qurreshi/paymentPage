const mongoose = require('mongoose');
const Shcema = mongoose.Schema;

const bankSchema = new Shcema({

});


module.exports = mongoose.model('bankpayment', bankSchema);