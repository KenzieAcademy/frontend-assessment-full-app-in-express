const express = require("express")
const path = require("path")

const app = express()
const publicFolderPath = path.join(__dirname, "public")

app.use(express.json())
app.use(express.static(publicFolderPath))

const users = []

// add POST request listener here
app.post('/api/users', function(req, res) {
    console.log(req.body)
    if(users.find(user => user.username === req.body.username)) {
        res.status(409)
        res.send(new Error('Username already exists'))
    } else {
        req.body.userid = Math.floor(Math.random() * 1000)
        users.push(req.body)
        res.status(201).send(req.body)
    }
    console.log(users)
} )

app.listen(3000);