import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin: 'https://cru-dfrotnend.vercel.app', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true // Include if you're using cookies or authentication
  }));
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import userRouter from './routes/users.routes.js'


//routes declaration
app.use("/api", userRouter)

// http://localhost:8000/api/v1/users/register

export { app }