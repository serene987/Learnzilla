import cors from 'cors'
import express from 'express'
// const express = require ('express');


const app =express();

app.use(express.json());
app.use(cors());
// configing happens here if it's open it's open to everyone

app.get('/',(req,res) => {res.send("<h1>Hi</h1>")});

// app.get('/todos',(req,res)=>{res.send("<ul><li>Go to market</li><li>Plant a plant</li></ul>")});
// app.get('/message',(req,res)=>{res.send('i\'m working....')});

// app.get('/getName',(req,res)=> {res.send('Serena')});

// app.post('/user',(req,res)=>{
//     console.log(req.body);
//     res.send('Recived');
// })

app.listen(3001,()=>{console.log("server is working")});