const express = require("express");

const router = express.Router();
const {
    getHomePage,
    createUser,
    UpdateUserAPI,
    deleteUserAPI
} = require("../controllers/homeController");

const {
    getCustomer
} = require("../controllers/CustomerController");
const { postUploadSingleFile } = require("../controllers/UploadfileController");
router.get("/user", getHomePage);
router.post('/user', createUser)
router.put('/user', UpdateUserAPI)
router.delete('/user', deleteUserAPI)




router.get("/customer", getCustomer)
router.post('/file', postUploadSingleFile)

// router.get("/create", getCreate);
// router.post("/create-user", createUser);

// router.get("/cc", getCc);

module.exports = router;
