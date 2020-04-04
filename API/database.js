const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('./config');

const url = `mongodb+srv://${config.db.DB_USER}:${config.db.DB_PASS}@cluster0-3hhgx.mongodb.net/test?retryWrites=true&w=majority`;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

module.exports = {

    connect: () => {
        mongoose.connect(url, options, (err) => {
            if (!err)
                console.log('Database connected');
            else
                console.log(err);
        });
    }
}