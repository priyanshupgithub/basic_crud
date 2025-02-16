import express from "express";
import User from "../models/userModel.js";
const router = express.Router();

router.post("/api/users", async (req, res) => {
  try {
    const { first_name, last_name, age, gender, phone, email, password } =
      req.body;
    const newUser = new User({
      first_name,
      last_name,
      age,
      gender,
      phone,
      email,
      password,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User ceated successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
});

router.get("/", (req, res) => {
  try {
    res.send("hello from the server");
  } catch (error) {
    console.error("error in connecting server.", error);
  }
});
export default router;
