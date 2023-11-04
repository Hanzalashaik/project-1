import express from "express";
import userModel from "../../models/user/User.js";

let router = express.Router();

//post
router.post("/add", async (req, res) => {
  try {
    let userData = req.body;
    await userModel.create(userData);
    res.status(200).json({ msg: "User Donate Sucessfully" });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

export default router;