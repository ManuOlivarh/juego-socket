import React, { Component } from 'react'


class SubmitGuess extends Component {

   
  /*
  handleSubmit = (e) =>{
      e.preventDefault()
      var checkAlpha = /^[a-zA-Z]+$/;
   if (this.refs.textInput.value.match(checkAlpha)) 
    {
      const changeCase = this.refs.textInput.value.toUpperCase()
      const letter = changeCase
      this.props.checkLetter(letter)
      this.refs.textInput.value = ''
    } 
  else
    {  
     alert("Escribe solo letras por favor");
     this.refs.textInput.value = ''
     return false; 
    }
     
         }

        */       

 handleClick = (e) =>{
   
    const letter = e.target.value
    this.props.checkLetter(letter)
    console.log(letter);   
    
             }


     render() {
      return (
        <div className="SubmitGuess">
      
      {/*
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref='textInput' maxLength='1' />
          <button disabled={this.btnDisable} >Probar letra</button>
          </form>*/}
          <button  onClick={this.handleClick} value="A">A</button>
          <button  onClick={this.handleClick} value="B" >B</button>
          <button  onClick={this.handleClick} value="C" >C</button>
          <button  onClick={this.handleClick} value="D" >D</button>
          <button  onClick={this.handleClick} value="E" >E</button>
          <button  onClick={this.handleClick} value="F" >F</button>
          <button  onClick={this.handleClick} value="G" >G</button>
          <button  onClick={this.handleClick} value="H" >H</button>
          <button  onClick={this.handleClick} value="I" >I</button>
          <button  onClick={this.handleClick} value="J" >J</button>
          <button  onClick={this.handleClick} value="K" >K</button>
          <button  onClick={this.handleClick} value="L" >L</button>
          <button  onClick={this.handleClick} value="M" >M</button>
          <button  onClick={this.handleClick} value="N" >N</button>
          <button  onClick={this.handleClick} value="O" >O</button>
          <button  onClick={this.handleClick} value="P" >P</button>
          <button  onClick={this.handleClick} value="Q" >Q</button>
          <button  onClick={this.handleClick} value="R" >R</button>
          <button  onClick={this.handleClick} value="S" >S</button>
          <button  onClick={this.handleClick} value="T" >T</button>
          <button  onClick={this.handleClick} value="U" >U</button>
          <button  onClick={this.handleClick} value="V" >V</button>
          <button  onClick={this.handleClick} value="W" >W</button>
          <button  onClick={this.handleClick} value="X" >X</button>
          <button  onClick={this.handleClick} value="Y" >Y</button>
          <button  onClick={this.handleClick} value="Z" >Z</button>
        </div>
      );
    }
  }
  

  export default SubmitGuess;