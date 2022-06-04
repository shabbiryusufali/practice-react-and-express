// server/index.js

const express = require("express");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();

var userList = [];
var numberOfUsers = 0;
app.use(urlencodedParser);

app.get('/api', (req, res) => {
    res.json({ date_created: "June 3, 2022", message: "Hello from the server!!" });
})

app.post('/add_user', urlencodedParser, (req, res) => {
    console.log(req.body)
    var userName = req.body.uname;
    console.log(userName);
    var firstName = req.body.fname;
    console.log(firstName);
    var lastName = req.body.lname;
    console.log(lastName)
    var newUser = { username: userName, first: firstName, last: lastName };
    console.log(newUser)
    numberOfUsers++;
    userList.push(newUser);
    res.redirect('/')
})

app.get('/get_users', (req, res) => {
    res.send({
        listOfUsers: userList
    });
})

app.listen(PORT, () => {
    console.log(`Server listening on PORT:${PORT}`);
});