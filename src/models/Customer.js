const { default: mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    phone: String,
    image: String,
    description: String,
    timeStamp: {
        type: Date,
        default: Date.now
    }
}); const Customer = mongoose.model('Customer', schema);

module.exports = Customer;