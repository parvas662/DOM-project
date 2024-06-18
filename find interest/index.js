const express = require('express');
const cors = require('cors');
const app = express(); 

app.use(express.json()); 
app.use(cors());

app.get("/interest",function(req,res){
    const principal = parseInt(req.query.principle);
    const rate = parseInt(req.query.rate);
    const time = parseInt(req.query.time);

    console.log(principal,rate,time)
    const interest = (principal*rate*time)/100
    res.json({"interest" : interest})
    
})
const PORT = 3000; 
app.listen(PORT)
