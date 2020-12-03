const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');

// middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))


// SERVER TEST
app.get('/', (req, res) => {
    res.send("Hello!")
})


// INDEX PAGE
app.get('/pokemon', (req, res) => {
    res.render('Index', {pokemon: pokemon});
});


// NEW
app.get('/new', (req, res) => {
    res.render('New');
})

// Create
app.post("/", (req, res) => {
    // parse our data into the same structure as the data in our model
    // push our data to our model
    pokemon.push(req.body);
    // redirect the user to the index
    res.redirect("/pokemon")
})


// SHOW PAGE
app.get('/pokemon/:idOfPokemonArray', (req, res) => {
    res.render ('Show', {
        pokemon: pokemon[req.params.idOfPokemonArray]
    })
})



app.listen(3000, () => {
    console.log('listening');
});