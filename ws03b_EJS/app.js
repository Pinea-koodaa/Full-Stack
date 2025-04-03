const express = require('express');
const app = express();
const port = 3000;

// asetetaan ejs hallinnoimaan näkymiä
app.set('view engine','ejs');

//middleware
app.use(express.static('public'));

//middleware varmistaa et muuttujil arvo
app.use((req,res,next) => {
    res.locals.message = res.locals.message || 'Tereeve';
    res.locals.juomat = res.locals.juomat || [];
    res.locals.tulostetaanko = res.locals.tulostetaanko || false;
    res.locals.users = res.locals.users || [];
    next();
});

//tehtävä 1, ejs route
//tehtävä 4 myös
app.get('/', (req, res) => {
    const tulostetaanko = true;
    const viesti = 'Ehdollinen viästi toimii';
    res.render('index', { 
        message: 'Hello ejs', 
        viesti,
        tulostetaanko
    });
});

//tehtävä 2
app.get('/data', (req, res) => {
    const juomat = ['Pepsi Max', 'Kaakao', 'Jääkahvi', 'Vichy'];
    res.render('index', { message: 'Lista lemppari juomista:', juomat });
});


//tehtävä 5
app.get('/users', (req, res) => {
    const users = [
        { name: 'Pena', age: 33 },
        { name: 'Pertti', age: 44 },
        { name: 'Pasi', age: 51 },
    ];
    res.render('index', { users });
});

app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
});