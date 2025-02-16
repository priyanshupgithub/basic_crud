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

router.get("/api/get-users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "User returns successfully.", users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res
      .status(500)
      .json({ message: "Error in retrieving users.", error: error.message });
  }
});

router.put("/api/update-user", async (req, res) => {
  try {
    const { email, first_name, last_name, age, gender, phone } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required for update" });
    }

    // Update user in the database
    const updatedUser = await User.findOneAndUpdate(
      { email }, // Find user by email
      { first_name, last_name, age, gender, phone }, // Update these fields
      { new: true } // Return the updated user
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal server error" });
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
