import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()
// In your Express app
// At the very top of your Express app, before any other middleware
app.use(cors({
    origin: 'https://cru-dfrotnend.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
  }));
  
  // Also handle preflight OPTIONS requests
  app.options('*', cors());
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import userRouter from './routes/users.routes.js'


// Add this before your routes declaration
app.get("/api/test", (req, res) => {
    res.json({ message: "API is working" });
  });

//routes declaration
app.use("/api", userRouter)


// http://localhost:8000/api/v1/users/register

export { app }