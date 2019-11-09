import React, { Component } from 'react'


class NewGame extends Component {
    render() {
      return (
        <div className="NewGame">
           <button onClick={this.props.restart}>Nuevo Juego</button>
        </div>
      );
    }
  }
   

  export default NewGame;