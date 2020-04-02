const mongoose = require('mongoose');
const Shcema = mongoose.Schema;

const debitSchema = new Shcema({

});
module.exports = mongoose.model('debitcard', debitSchema);