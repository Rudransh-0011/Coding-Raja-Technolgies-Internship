import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect("mongodb+srv://rudranshb089:roni%401234@blogit.sitmk3u.mongodb.net/Coding-Raja-Technolgies-Internship?retryWrites=true&w=majority&appName=blogIt").then(
    () => {
        console.log('connected to mongodb');
    }
)
.catch((err) =>{
    console.log(err);
}  );

const app= express();

app.listen(3000,() => {
    console.log('server running on port 3000');
});