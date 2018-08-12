var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3000));

let people = ['John', 'Sarah', 'Paul'];

let people2 = [
    {
        firstName: 'Peter',
        lastName: 'All'
    },
    {
        firstName: 'Sarah',
        lastName: 'Beth'
    }
]

app.get('/', (req, res) => {
    res.render('home', {
        content: 'This is some content',
        published: true,
        people: people,
        people2: people2
    })
});

app.listen(app.get('port'), function(){
    console.log("server is running" + app.get('port'));
});