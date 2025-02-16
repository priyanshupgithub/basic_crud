import express from "express";
import connectDatabase from "./Database/database.js";
import homeRoute from "./Routes/homeRoute.js";
import userRoutes from "./Routes/userRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json()); //Parse the JSON data
app.use(cors());

const PORT = 8000;

app.use("/", userRoutes);

const startServer = async () => {
  try {
    await connectDatabase(); //wait for the database connection
    app.listen(PORT, () => {
      console.log("server is running on Port", PORT);
    });
  } catch (error) {
    console.error("❌ Error connecting to database", error);
    process.exit(1); // Exit process if database connection fails
  }
};

startServer();
