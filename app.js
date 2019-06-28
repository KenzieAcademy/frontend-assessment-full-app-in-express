const express = require("express")
const path = require("path")

const app = express()
const publicFolderPath = path.join(__dirname, "public")

app.use(express.json())
app.use(express.static(publicFolderPath))

const users = []
let nameAvailable = true;

app.post('/api/user/', (req, res) => {

    fetchedUsername = req.body.username;

    users.forEach(user => {
        if (user.username === fetchedUsername) {
            nameAvailable = false;
            console.log("name taken");
        }
    })

    if (users === undefined) {
        req.body.id = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

        users.push(req.body);

        res.statusCode = 201;
        res.send(users);
    } else if (nameAvailable === true) {
        req.body.id = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

        users.push(req.body);

        res.statusCode = 201;
        res.send(users)
    } else if (nameAvailable === false) {
        res.statusCode = 409;
        res.send({
            "errMessage":"username already taken."
    });
    }


})
// add POST request listener here

app.listen(3000);