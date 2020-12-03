const React = require('react');

class Show extends React.Component {
    render(){
        const pokemon = this.props.pokemon;
        return(
            <body>
                {/* <h1>{pokemon[pokemon][pokemon.name]}</h1>
                    <p><img src={pokemon.img}/></p> */}
                    {/* <ul> */}
                      {/* <li>Type: {pokemon.type}</li> */}
                    {/* </ul>
                    <ul>
                        <h3>Stats</h3>
                        <li>HP: {pokemon.stats.hp}</li>
                        <li>Attack: {pokemon.stats.attack}</li>
                        <li>Defense: {pokemon.stats.defense}</li>
                        <li>SP Attack: {pokemon.stats.spattack}</li>
                        <li>SP Defense: {pokemon.stats.spdefense}</li>
                        <li>Speed: {pokemon.stats.speed}</li>
                    </ul> */}
            </body>
        )
    }
}
module.exports = Show;