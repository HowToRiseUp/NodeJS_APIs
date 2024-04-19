const Customer = require("../models/Customer");


const getCustomer = async (req, res) => {
    const customer = await Customer.find();
    return res.status(200).json({
        error: 0,
        data: customer
    })
};

const createCustomer = async (req, res) => {
    return res.status(200).json({
        error: 0,
        data: null
    })
}

module.exports = { getCustomer, createCustomer }