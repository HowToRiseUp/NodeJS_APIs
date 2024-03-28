const { default: mongoose } = require("mongoose");


const schema = new mongoose.Schema({ name: String, email: String, city: String });
const User = mongoose.model('User', schema);

module.exports = User;