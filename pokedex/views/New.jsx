const React = require('react');

class New extends React.Component {
  render() {
    return (
        <div>
            <h1>New Pokemon</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/pokemon" method="POST">
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
              
              <input type="submit" name="" value="Create Pokemon"/>
            </form>
        </div>);
    }
  }

module.exports = New;