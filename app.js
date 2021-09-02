const { render } = require('ejs');
const express = require('express');
const { result } = require('lodash');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const env =  require('dotenv').config()


// express app
const app = express();

//connect to mongodb
const dbURI = process.env.URL;
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(process.env.PORT))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');


// middleware & allows access to static pages like css from a folder
app.use(express.static('public'));
app.use(express.urlencoded({extended :true}));


//routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

//blogroutes
app.use('/blogs', blogRoutes);


// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
})