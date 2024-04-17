import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from './routes/auth.route.js'
import userRoutes from './routes/user.route.js'
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGODB).then(() => {
  console.log("mongodb is connected");
}).catch(err => {
    console.log(err);
});

const app = express();

// CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    // Respond to preflight request
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json());
app.use(cookieParser());


app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

app.use('/api/auth',authRoutes);
app.use('/api/user',userRoutes);


app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500 ;
  const message = err.message || "Internal server error" ;
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  });
});