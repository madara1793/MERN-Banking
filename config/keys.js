require('dotenv').config();

module.exports = {
    mongoURI: MONGO_URI,
    secretOrKey: process.env.SECRET_KEY
};