import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGODB).then(() => {
  console.log("mongodb is connected");
}).catch(err => {
    console.log(err);
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use('/api/auth',authRoutes);
