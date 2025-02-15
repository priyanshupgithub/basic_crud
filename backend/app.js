import express from "express";
import connectDatabase from "./Database/database.js";

const app = express();
const PORT = 8000;

connectDatabase();
app.use(express.json()); //Parse the JSON data
app.use("/", (req, res) => {
  try {
    res.send("hello from the serrver");
  } catch (error) {
    console.error("error in connecting server.", error);
  }
});

app.listen(PORT, () => {
  console.log("server is running on Port", PORT);
});
