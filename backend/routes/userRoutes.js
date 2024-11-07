const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, allUsers); // go through protect middleware first, only logged in user acn access this route
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
