const React = require('react');
const Layout = require('./layout/Layout.jsx');

class Edit extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    return (
      <Layout>
        <h1>{pokemon.name} Edit page</h1>
            <form action={`/pokemon/${this.props.index}?_method=PUT`} method="POST">

              Name:     <input type="text" name="name" /><br/>
              id:       <input type="text" name="id" /><br/>
              img:      <input type="image" name="img" /><br/>
              Type:     <input type="text" name="type" /><br/>
              Stats: <br />
              HP:       <input type="text" name="hp" /><br/>
              Attack:   <input type="text" name="attack" /><br/>
              Defense:  <input type="text" name="defense" /><br/>
              Spattack  <input type="text" name="spattack" /><br/>
              Spdefense <input type="text" name="spdefense" /><br/>
              Speed     <input type="text" name="speed" /><br/>
              
        <input type="submit" name="" value="Submit Changes"/>
        </form>
      </Layout>
    )
  }
}
module.exports = Edit;