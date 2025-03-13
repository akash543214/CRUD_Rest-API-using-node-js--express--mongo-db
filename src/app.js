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

// Add this before any other routes
app.get('/direct-test', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://cru-dfrotnend.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.status(200).json({ message: "Direct test successful" });
  });
// Add this before your routes declaration
app.get("/api/test", (req, res) => {
    res.json({ message: "API is working" });
  });

//routes declaration
app.use("/api", userRouter)

// http://localhost:8000/api/v1/users/register

export { app }