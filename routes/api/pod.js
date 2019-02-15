const router = require("express").Router();
const podController = require("../../controllers/podscontroller");

// Matches with "/api/user"
router.route("/")
    .post(podController.create)
    // .get(podController.read);
 
router.route('/mypods')
    .post(podController.getMyPods)

router.route('/currentpod')
    .post(podController.getOnePod)

module.exports = router;
