const express = require('express');
const server = express();
const cors = require('cors')
const bodyParser = require('body-parser');
server.use(cors())
server.use(bodyParser.json())

server.use((req, res, next) => {
console.log("Body is now", req.body)

    next()
})


server.use('/app', require('../api'))

server.get('/hello', function(req,res,next){
    res.send("Hello?");
});

const PORT = process.env["PORT"] ?? 3002

server.listen(PORT,() => {
    console.log("server is up!");
});

