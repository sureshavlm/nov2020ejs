const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
var ejs = require('ejs');

app.set('views', path.join(__dirname, 'views')); //refencing views folder
app.set('view engine', 'ejs'); //instructing node to use ejs tempaltes
app.use(express.static(path.join(__dirname, 'public')));

app.get('/products', function(req, res) {
    //read from file
    //var data = fs.readFileSync('./data/products.json');
    res.render('products', { products: ['Tata Sky', 'Airtel DTH']});
});
app.listen(4000, function() {
    console.log('App start on 4000 port');
});