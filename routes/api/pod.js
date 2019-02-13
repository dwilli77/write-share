const router = require("express").Router();
const podController = require("../../controllers/podscontroller");

// Matches with "/api/user"
router.route("/")
    .post(podController.create)
    // .get(podController.read);
 

module.exports = router;
