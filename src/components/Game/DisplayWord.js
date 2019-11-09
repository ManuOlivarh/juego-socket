import React, { Component } from 'react'



class DisplayWord extends Component {
    render() {
      const wordLetters = this.props.word.split('') 
      const answer = wordLetters.map(letter => {
        
        if (letter === " "){addDash = "\u2002" }else{addDash = "_"}
        var addDash
  
        let letterState = addDash
           
        if (this.props.guessedLetters.includes(letter)) {
          letterState = letter
        }
        return letterState + " ";
      })
      return (
        <div className="DisplayWord">
          <h3>{answer}</h3>
        </div>
      );
    }
  }

  export default DisplayWord;