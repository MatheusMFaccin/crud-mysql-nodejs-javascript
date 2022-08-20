const PORT = 3000;
const express = require('express');
const server = express();


server.get('/',(req,res)=>{
    
    console.log('teste');
})

server.listen(PORT);