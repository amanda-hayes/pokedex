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
app.get('/pokemon/new', (req, res) => {
    res.render('New');
})

// DELETE
app.delete('/pokemon/:id', (req, res) => {
    pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
});


// UPDATE
app.get('pokemon/edit/:id', (req, res) => {
    let pkmn = null;

    for (let poke in pokemon) {
        if (pokemon[poke].id == req.params.id) {
            pkmn = pokemon[poke];
        }
    }

    res.render ('Edit', {pokemon: pkmn});
})

// Create
app.post("/pokemon", (req, res) => {
    let newPokemon = {
        id: req.body.id,
        name: req.body.name,
        img: req.body.img,
        type: [
          req.body.type
        ],
        stats: {
          hp: req.body.hp,
          attack: req.body.hp,
          defense: req.body.defense,
          spattack: req.body.spattack,
          spdefense: req.body.spdefense,
          speed: req.body.speed
        }
    };

    pokemon.push(newPokemon);
    // redirect the user to the index
    res.redirect("/pokemon")
})


// SHOW PAGE
app.get('/pokemon/:id', (req, res) => {
    let pkmn = null;

    for (let poke in pokemon) {
        if (pokemon[poke].id == req.params.id) {
          pkmn = pokemon[poke];
        }
       }

    res.render ('Show', {
        pokemon: pkmn
    })
})



app.listen(3000, () => {
    console.log('listening');
});