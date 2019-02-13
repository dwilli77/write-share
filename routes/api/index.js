const router = require("express").Router();
const userRoutes = require("./user");
const podRoutes = require('./pod');

// user routes
router.use("/user", userRoutes);

// pods routes
router.use('/pod', podRoutes);


module.exports = router;
