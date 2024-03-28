const express = require("express");

const router = express.Router();
const {
    getHomePage,
    createUser,
    UpdateUserAPI,
    deleteUserAPI
} = require("../controllers/homeController");

router.get("/user", getHomePage);
router.post('/user', createUser)
router.put('/user', UpdateUserAPI)
router.delete('/user', deleteUserAPI)

// router.get("/create", getCreate);
// router.post("/create-user", createUser);

// router.get("/cc", getCc);

module.exports = router;
