const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

//SET UP TEMPLATE ENGINE
app.set('view engine', 'ejs');

//SETTING UP STATIC FILES
app.use('/assets', express.static('assets'));

//SENDING HTML PAGE BACK
let data = [{ name: 'James Bond', email: 'JB@gmail.com', phone: '31538450007' },
    { name: 'Alice', email: 'alice@gmail.com', phone: '2132343847' },
    { name: 'Wonder Woman', email: 'ww@gmail.com', phone: '3843944975' }
];

app.get('/index', function(req, res) {
    res.render('index', { list: data });
});

app.post('/contact', urlencodedParser, function(req, res) {
    console.log(req.body);
    res.render('contact-success', { data: req.body });
    data.push(req.body);
    res.json(data);
});

app.delete('/index/:name', function(req, res) {
    data = data.filter(function(list) {
        return list.name.replace(/ /g, "-") !== req.params.name;
    });
    res.json(data);
});


app.get('/contact', function(req, res) {
    res.render('contact', { qs: req.query });
});

app.post('/contact', urlencodedParser, function(req, res) {
    console.log(req.body);
    res.render('contact-success', { data: req.body });
});

app.delete('/contact', function(req, res) {
    // write something here


});



//LISTEN TO PORT
app.listen(3000);


//HTTP METHODS: GET, POST, DELETE, PUT
//GET   app.get('route', fn)
//POST   app.post('route', fn)
//DELETE  app.delete('route', fn)

//Send file like HTML -- Template engine