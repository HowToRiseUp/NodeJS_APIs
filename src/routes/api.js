const express = require("express");

const router = express.Router();
const { getCustomer, createCustomer } = require("../controllers/CustomerController");

const { postUploadSingleFile } = require("../controllers/UploadfileController");

router.post('/file', postUploadSingleFile)
router.get("/customer", getCustomer)
router.get("/create-customer", createCustomer)


// router.get("/create", getCreate);
// router.post("/create-user", createUser);

// router.get("/cc", getCc);
// router.get("/user", getHomePage);
// router.post('/user', createUser)
// router.put('/user', UpdateUserAPI)
// router.delete('/user', deleteUserAPI)

module.exports = router;
