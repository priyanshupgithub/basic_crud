import express from "express";

const homeRoute = express.Router();

homeRoute.use("/", (req, res) => {
  try {
    res.send("hello from the server");
  } catch (error) {
    console.error("error in connecting server.", error);
  }
});

export default homeRoute;
