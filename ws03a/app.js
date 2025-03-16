const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express();
const port = 3000;

// Middleware
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});
//middleware for json handling
app.use(bodyParser.json());

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));

// staic files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'services.html'));
});

app.post('/submit', (req, res) => {
    res.json({ message: "Form received!", data: req.body });
});

app.get('/list', (req, res) => {
    const filePath = path.join(__dirname, 'data.txt');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send("Error reading the file.");
        }
        res.send(`<pre>${data}</pre>`);
    });
});

app.get('/json', (req, res) => {
    const filePath = path.join(__dirname, 'users.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send("Error reading the file.");
        }

        const users = JSON.parse(data);
        let table = "<table border='1'><tr><th>ID</th><th>Name</th><th>Email</th></tr>";

        users.forEach(user => {
            table += `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.email}</td></tr>`;
        });

        table += "</table>";
        res.send(table);
    });
});

app.post('/add', (req, res) => {
    const filePath = path.join(__dirname, 'users.json');
    const newUser = req.body;

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send("Error reading the file.");
        }

        let users = JSON.parse(data);
        newUser.id = users.length + 1; // gives unique id
        users.push(newUser);

        fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).send("Error saving the user.");
            }
            res.json({ message: "User added successfully!", user: newUser });
        });
    });
});

// middleware, x custom header
const checkCustomHeader = (req, res, next) => {
    if (!req.headers['x-custom-header']) {
        return res.status(400).json({ error: "X-Custom-Header is missing" });
    }
    next();
};

// secure route that uses custom header
app.get('/secure', checkCustomHeader, (req, res) => {
    res.json({ message: "Secure data accessed!" });
});

// starting the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});