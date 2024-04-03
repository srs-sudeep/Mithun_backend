const express = require("express");
const router = express.Router();
const users = require("./users/routes");
// const medicines = require("./medicines/routes");
// const vendor = require("./vendor/routes");
// const admin = require("./admin/routes");
// const payment = require("./payment/routes");
// const blogs = require("./blogs/routes");
router.use("/users", users);
// router.use("/admin", admin);
// router.use("/medicines", medicines);
// router.use("/vendor", vendor);
// router.use("/payment", payment);
// router.use("/blogs", blogs);
module.exports = router;