const express = require('express')
const router = express.Router()

//ROI ROUTES ----------------------------------
const UserController = require('../../controllers/user.controller');
const usercontroller = new UserController


router.route("/").get(usercontroller.getAll)
router.route("/").post(usercontroller.create);
router.route("/:user_id").get(usercontroller.getById)
router.route("/:user_id").put(usercontroller.update)
router.route("/:user_id").delete(usercontroller.delete);


module.exports = router
