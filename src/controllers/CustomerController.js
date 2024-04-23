const Customer = require("../models/Customer");
const { uploadSingleFile } = require("../services/fileServices");


const getCustomer = async (req, res) => {
    const customer = await Customer.find();
    return res.status(200).json({
        error: 0,
        data: customer
    })
};

const createCustomer = async (req, res) => {
    const { name, address, phone, email, description } = req.body;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No have image was uploaded.');
    } else {
        let result = await uploadSingleFile(req.files.image);
        imageUrl = result.path;
    }

    let customerData = { name, address, phone, email, description, image: imageUrl }

    const newUser = await Customer.create(customerData);

    return res.status(201).json({
        error: 0,
        data: newUser
    });
}

module.exports = { getCustomer, createCustomer }