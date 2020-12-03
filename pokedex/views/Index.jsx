const React = require('react');
// const Layout = require("./layout/Layout.jsx")

class Index extends React.Component {
    render(){
        return (
            <body>
                <h1>Pokemon App</h1>
                <a href="/pokemon/new">Add a new Pokemon</a>
                <ul>{
                    this.props.pokemon.map(
                        (pokemon, index) => {
                            return (
                                <li class="image-container">
                                    <img src={pokemon.img}/>
                                    <a href="">Read More</a>
                                </li>
                            )
                        }
                    )
                }
                
                </ul>
            </body>
        )
    }
}

module.exports = Index; 