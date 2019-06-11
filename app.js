const express = require("express")
const path = require("path")

const app = express()
const publicFolderPath = path.join(__dirname, "public")

app.use(express.json())
app.use(express.static(publicFolderPath))

const users = []

const error = {
    message: "username already exists"
}

app.post('/api/user/', function (req, res) {
        const foundUser = users.find(user => {
         return user.userName === req.body.userName
        })
        if (!foundUser) {
            req.body.id = Math.floor(Math.random()*100)
            res.status(201)
            users.push(req.body)
            res.send(users)
        }
       else{
           res.status(409)
           res.send(error)
       }

    }),

    app.listen(3000)