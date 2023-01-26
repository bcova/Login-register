const express = require('express');

const server = express();

server.get('/hello', function(req,res,next){
    res.send("Hello?");
});

server.listen(3000,() => {
    console.log("server is up!");
});