const express = require("express")
const path = require("path")

const app = express()
const publicFolderPath = path.join(__dirname, "public")

app.use(express.json())
app.use(express.static(publicFolderPath))

const users = []

app.post('/api/user/', (req, res) => {
    users.push(req.body)
    res.status(201)
    res.send('It Works')
})

// add POST request listener here

app.listen(3000);