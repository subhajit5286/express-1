//const http=require('http');
const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log('In the middleware')
    next()
})
app.use((req,res,next)=>{
    console.log('In Another middleware')
    res.send('<h1> hello to node js </h1>') 
   
})
//const server=http.createServer(app);
app.listen(3000);