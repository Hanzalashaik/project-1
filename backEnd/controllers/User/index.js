import express from "express";
import userModel from "../../models/user/User.js";
import { userLoginValidator, errorMiddleware } from "../../middleware/index.js";
let router = express.Router();

//post
router.post("/add",userLoginValidator(),errorMiddleware, async (req, res) => {
  try {
    let userData = req.body;
    //checking email
    let emailCheck=await userModel.findOne({email:userData.email});
    let phoneCheck=await userModel.findOne({phone:userData.email});

    if(emailCheck || phoneCheck){
      return res.status(409).json({msg:"Email and PhoneNumber Already Exist"})
    }
    await userModel.create(userData);
    res.status(200).json({ msg: "User Donate Sucessfully" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "Internal Server Error" });
  }
});

//get
router.get("/getall", async (req, res) => {
  try {
    let allUsers = await userModel.find({});
    if (!allUsers) {
      return res.status(401).json({ msg: "No Users Available" });
    }
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);

    res.status(500).json({ msg: "Internal Server Error" });
  }
});
export default router;
