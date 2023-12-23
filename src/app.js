import  express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
// import { router } from "./routes/user.routes";


const app = new express();
app.use(cors({                                     // app.use is used configure all the middleware..
    origin: process.env.CORS_ORIGIN,
    credentials:true,
}));

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({
    extended: true, limit:"16kb"
}))
app.use(express.static("public"))
app.use(cookieParser())


// Routes Import
import userRouter from "./routes/user.routes.js"

// Routes declaration
app.use("/api/v1/users",userRouter)

export  {app};