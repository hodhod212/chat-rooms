const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);
Mongoose.connection.on('Error ',error=>{
    console.log('Mongodb Error: ',error);
});

module.exports = {
    Mongoose
}