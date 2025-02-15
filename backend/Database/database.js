import mongoose from "mongoose";

const connectDatabase = async () =>{
    try {
        await mongoose.connect("mongodb+srv://priyanshujii0001:Mongodb123@devtinder.jksoo.mongodb.net/");
        console.log("DataBase connection successfully established.")

    } catch (error) {
        console.error("Database connection failed",error);
        process.exit(1); // Exit if connection fails
    }
}

export default connectDatabase;