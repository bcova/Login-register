const appRouter = require('express').Router();

appRouter.use((req, res, next) => {
    console.log(req.originalUrl);

    next();
});

appRouter.get('/', (req, res, next) => {
    res.send({message: "Welcome!"})
})

appRouter.post('/sayHello', (req, res, next) => {
    res.send({message: 'Thanks for the data bro!'})
});


module.exports = appRouter;