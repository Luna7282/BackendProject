// import mongoose from "mongoose";
import dotenv from "dotenv";
import connectionDB from "./db/connection.js";
import {app} from "./app.js";

dotenv.config({
    path: "./.env"
});

const port= process.env.PORT ;
connectionDB()
.then(()=>{
    app.on("error", (error)=>{
        console(console.log( "ERR!!!",error))
        throw error
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`⚙️Server is Running on PORT ${port}`);
    })
})

.catch((error)=>{
    console.log("MONGODB Connection failed",error);
})
