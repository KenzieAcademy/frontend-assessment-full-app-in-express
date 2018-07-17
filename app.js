const express = require("express")
const path = require("path")

const app = express()
// take current directory and join it with public = dirname
const publicFolderPath = path.join(__dirname, "public")

app.use(express.json())
app.use(express.static(publicFolderPath))

const users = []


app.post('/api/user/', (req, res) => {
    let duplicateFound = false;
    
    for (let i= 0; i < users.length; i++){
        console.log(i);
        if(users[i].username === req.body.username){
            duplicateFound = true;
            break;
        }
    }
    if (duplicateFound){
        res.status(409).end();
        
        
    } else {
        users.push(req.body);
        
        res.status(201).end();
    }
    

    
});


// add POST request listener here

app.listen(3000);