const express = require('express')

const router = express.Router();
const {users} = require("../controllers/auth");
router.get("/users", users);
module.exports=router;

//All authorisation related stuff is here