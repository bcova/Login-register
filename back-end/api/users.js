
import {getUser} from '../db/users'
const appRouter = require('express').Router();



appRouter.post('/login', async (req,res,next)=> {
    const {username, password} = req.body.user
    if (!username || !password) {
        next({
            name: 'Missing Credentials Error',
            message: 'Please enter both username and password'
        })
    }
    try {
        const user = await getUser({username, password})
        console.log(user, 'user')
        if (user) {
           
            res.send({message: 'You are logged in!',user})
        } else {
            next({
                name: 'IncorrectCredentialsError',
                message: 'Incorrect Username or Password'
            })
        }
    } catch ({name, message}) {
        next({name, message})
    }
})