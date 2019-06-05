const express = require("express")
const path = require("path")

const app = express()
const publicFolderPath = path.join(__dirname, "public")

app.use(express.json())
app.use(express.static(publicFolderPath))

const users = []



// add POST request listener here
app.post('/api/user/', function (req, res) {
    let userObj = req.body;
    users.push(userObj);
    // console.log("in app.js",req.body)
    console.log( "new user", users)
})

app.listen(3000);