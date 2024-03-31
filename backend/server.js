import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path'

import authRoutes from './routes/auth.js';
import messageRoutes from './routes/message.js'
import userRoutes from './routes/user.js';

import connectToMongoDb from './db/connection.js';
import { app, server } from './socket/socket.js';

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
	res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
});

server.listen(PORT,()=>{
	connectToMongoDb();
	console.log(`Server Started on ${PORT}`)
})