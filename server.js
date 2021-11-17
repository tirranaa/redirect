// Load Node modules
const express = require('express');

// Initialise Express
var app = express();

const ejs = require('ejs');
// Render static files
app.use(express.static('public'));

// Set the view engine to ejs
app.set('view engine', 'ejs')

// *** GET Routes - display pages ***
// Root Route

app.get('/', function (req, res) {
    res.render('pages/index');
});

// Port website will run on
app.listen(process.env.PORT || 3000);