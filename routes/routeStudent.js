const express= require('express')
const app= express()

app.use(express.static('page-html'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/page-html/contact.html');
});

app.get('/services', (req, res) => {
  res.sendFile(__dirname + '/page-html/home.html');
});


app.get('/contact', (req, res) => {
res.sendFile(__dirname + '/page-html/services.html');
});

app.use((req, res, next) => {


const now = new Date();
const dayOfWeek = now.getDay(); 
const hours = now.getHours();

if (dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 9 && hours < 17) {
next(); 
} else {
res.send('L\'application web est disponible uniquement pendant les heures de travail (du lundi au vendredi, de 9h à 17h).');
}


});


module.exports=app