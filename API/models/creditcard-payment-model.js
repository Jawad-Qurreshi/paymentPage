const mongoose = require('mongoose');
const Shcema = mongoose.Schema;

const creditSchema = new Shcema({

});


module.exports = mongoose.model('creditcard', creditSchema);