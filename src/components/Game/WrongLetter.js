import React, { Component } from 'react'



class WrongLetters extends Component {
  
    getWrongLetters(){
     const wrong = this.props.guessedLetters.filter(letter =>{
        return !this.props.word.split('').includes(letter)
      })
         return wrong
    }
    
    render() {
  
      return (
        <div className="WrongLetters">
          <p>{this.getWrongLetters()}</p>
        </div>
      );
    }
  }
  
  export default WrongLetters;