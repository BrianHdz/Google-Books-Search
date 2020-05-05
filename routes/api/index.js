const router = require("express").Router();
const savedRoutes = require("./saved");
const searchRoutes = require("./search");

// Book routes
router.use("/saved", savedRoutes);
// router.use("/search", searchRoutes);

module.exports = router;