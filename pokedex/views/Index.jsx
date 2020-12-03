const React = require('react');
const Layout = require("./layout/Layout.jsx")

class Index extends React.Component {
    render(){
        return (
            <Layout>
                <h1>Pokemon App</h1>
                <a href="/pokemon/new">Add a new Pokemon</a>
                <ul class="image-container">{
                    this.props.pokemon.map(
                        (pokemon, index) => {
                            return (
                                <li >
                                    {pokemon.name}
                                    <img src={pokemon.img}/>
                                    <a href={`/pokemon/${pokemon.id}`}>Read More</a>
                                    {/* Can't get the edit screen to work */}
                                    <a href={`/pokemon/${pokemon.id}/edit`}>Edit {pokemon.name}</a>
                                </li>
                            )
                        }
                    )
                }
                
                </ul>
            </Layout>
        )
    }
}

module.exports = Index; 