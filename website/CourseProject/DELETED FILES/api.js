const express = require('express');
const apiRouter = express.Router();

apiRouter.post('/user', userHandler)


let userId = 100

function userHandler(req, res) {
    const user = req.body

    const newUser = {
        id: userId++,
        ...user
    }
    res.json(newUser)
}

//more api paths......