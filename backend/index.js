import cors from 'cors'
import express from 'express'
// const express = require ('express');


const app =express();

app.use(express.json());
app.use(cors());
// configing happens here if it's open it's open to everyone

app.get('/',(req,res) => {res.send("<h1>Hi</h1>")});


app.listen(3001,()=>{console.log("server is working")});