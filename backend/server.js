import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.js';
import messageRoutes from './routes/message.js'
import userRoutes from './routes/user.js';

import connectToMongoDb from './db/connection.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.listen(PORT,()=>{
    connectToMongoDb();    
    console.log(`Server Started on ${PORT}`)
})