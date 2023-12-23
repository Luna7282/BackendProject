import dotenv from "dotenv"
import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"


const connectionDB = async()=>{
    try { 
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to database",error);
        process.exit(1);
    }
}

export  default connectionDB;
