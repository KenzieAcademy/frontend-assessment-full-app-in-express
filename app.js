const express = require("express")
const path = require("path")

const app = express()
const publicFolderPath = path.join(__dirname, "public")

app.use(express.json())
app.use(express.static(publicFolderPath))

const users = []

app.post('/api/user', (req, res) => {
    const foundUser = users.find(user => {
        return user.username && req.body.username && user.username.toLowerCase() === req.body.username.toLowerCase()
    })

    if (!foundUser) {
        res.status(201);
        console.log(req.body)
        req.body.id = Math.floor(Math.random() * 1000);
        users.push(req.body);
        res.send(req.body);

    } else {
        res.status(409);
        res.send(new Error("Username is taken, try again!"))

    }
})
app.listen(3000, () => console.log("Express is running on port 3000"));