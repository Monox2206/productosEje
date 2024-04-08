const mongoose = require('mongoose');
require('dotenv').config();

const URI = `mongodb+srv://${process.env.USER_BD}:${process.env.PASS_BD}@clusteradso2557466.0psufgx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(URI);

module.exports = mongoose;

