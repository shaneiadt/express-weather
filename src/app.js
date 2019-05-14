const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const hbs = require("hbs");

const publicFolder = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

app.set('view engine','hbs');
app.set('views', viewsPath);

hbs.registerPartials(partialsPath);

app.use(express.static(publicFolder));

app.get('',(req, res) => {
    res.render('index',{
        title: 'Weather',
        name: "Shane O'Moore"
    });
});

app.get('/about',(req, res) => {
    res.render('about',{
        title: 'About',
        name: "Shane O'Moore"
    });
});

app.get('/help',(req, res) => {
    res.render('help',{
        title: 'Help',
        message: 'Some random example message.',
    });
});

app.get("/weather", (req, res) => {
    res.send({
        location: "Sligo",
        forecast: "It's pissing rain"
    });
});

app.get("/help/*", (req, res) => {
    res.render('help',{
        title: 'Help',
        message: 'Article not found',
        name: "Shane O'Moore"
    });
});

app.get("*", (req, res) => {
    res.render('error',{
        title: 'Error',
        message: '404 Page Not Found',
        name: "Shane O'Moore"
    });
});

app.listen(port, () => {
    console.log('Server is running on port 3000...')
});