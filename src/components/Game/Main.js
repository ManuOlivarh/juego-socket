import React from 'react'
import './Style.css';
import DisplayWord from './DisplayWord'
import WrongLetters from './WrongLetter'
import SubmitGuess from './SumbitGuess'
import NewGame from './NewGame'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const images = {
  11: "https://humsco.github.io/hm-react/01/win.png",
  10: "https://humsco.github.io/hm-react/01/0.png",
  9: "https://humsco.github.io/hm-react/01/1.png",
  8: "https://humsco.github.io/hm-react/01/2.png",
  7: "https://humsco.github.io/hm-react/01/3.png",
  6: "https://humsco.github.io/hm-react/01/4.png",
  5: "https://humsco.github.io/hm-react/01/5.png",
  4: "https://humsco.github.io/hm-react/01/6.png",
  3: "https://humsco.github.io/hm-react/01/7.png",
  2: "https://humsco.github.io/hm-react/01/8.png",
  1: "https://humsco.github.io/hm-react/01/9.png",
  0: "https://humsco.github.io/hm-react/01/lose.png"
}




const easyWords = ['A', 'B' ] ;

const mediumWords = ['REACT', 'VUE', 'ANGULAR'];

const hardWords = ['PRESIDENTEJIMMYMORALES', 'VICEPRESIDENTEJAFETH', 'SANDRATORRESPRESIDENTEELECTA'];


 

var numberOfGuesses = 7

class Main extends React.Component {
  constructor(props) {
    super(props);

    
  
  this.state = {
    difficult: '',
    word: '',   
    guessedLetters: [],
    checkGameOver: 'playing',
    question:'',
    guessesRemaining: numberOfGuesses,
    
    
  };
 


}  
 


easyDifficult = () => {
  this.handleChange()
  this.setState({
    word : easyWords[Math.floor(Math.random() * easyWords.length)],  
    difficult: "EASY"

    
})
if(this.state.word = 'A'){
  this.setState.question = "QUIEN INVENTO LA RUEDA"
  console.log("FUNCIONAAA")
}else {

  console.log("NOPE")
  



}

 
}


normalDifficult = () => {
  this.handleChange()
  this.setState({
    word : mediumWords[Math.floor(Math.random() * mediumWords.length)],  
    difficult: "MEDIUM"
})
}

hardDifficult = () => {
  this.handleChange()
  this.setState({
    word : hardWords[Math.floor(Math.random() * hardWords.length)],  
    difficult: "HARD"
})
}




 




updateGuessedLetters = (letter) => {
  if(this.state.guessedLetters.includes(letter)){
    alert('YA ESCRIBISTE ESA LETRA!')
    
  }else {
  this.setState({
    guessedLetters: [...this.state.guessedLetters, letter]
    
  }
  )
  
}
}

updateGuessesRemaining = (letter) => {
  if (!this.state.guessedLetters.includes(letter) && !this.state.word.split('').includes(letter)) {
    this.setState({ guessesRemaining: this.state.guessesRemaining - 1 })
  }
 }


isGameOver() {
      if (this.state.guessesRemaining <= 0) {
        this.setState({checkGameOver: this.state.checkGameOver = 'lost'})
    }else if (this.wordIsGuessed()) {
        this.setState({checkGameOver: this.state.checkGameOver = 'won'})
    }
        this.gameOver()
}

gameOver() {
        if (this.state.checkGameOver === 'won') {
          alert('GANASTE!')
        } else if (this.state.checkGameOver === 'lost') {
        alert('PERDISTE')
        }
     }

wordIsGuessed() {
  const guessState = this.state.word.split('').map(letter => {
    if (this.state.guessedLetters.includes(letter)) {
      
      return letter
     }
  })
   return guessState.join('') === this.state.word
  
}

handleChange = () => {
  
  this.setState({
    word: '',   
    guessedLetters: [],
    checkGameOver: false,
    guessesRemaining: numberOfGuesses
  })
  
}

updateGameState(letter) {
  this.isGameOver()
  this.updateGuessedLetters(letter)
 
  this.updateGuessesRemaining(letter)
  
}




  render() {
    return (
      <div className="Main">
        <h1 className="titulo-juego">Ahorcado UMG</h1>
        <p>Para empezar a jugar seleccione una dificultad y se añadira una pregunta en base a la dificultad seleccionada que deberá dar respuesta</p>
        <div>  <ButtonGroup
              variant="contained"
              color="primary"
              aria-label="full-width contained primary button group"
            >
              <Button onClick={this.easyDifficult}>Facilito</Button>
              <Button onClick={this.normalDifficult}>Media</Button>
              <Button onClick={this.hardDifficult}>Dificil</Button>
            </ButtonGroup></div>

        <div>
        <p>{this.state.question}</p>
        <div className="picture">
          <img src={images[this.state.guessesRemaining]} alt="Can't load image"/>
        </div>
        <DisplayWord word = {this.state.word} guessedLetters = {this.state.guessedLetters} />
        <WrongLetters word = {this.state.word} guessedLetters = {this.state.guessedLetters} />
        <SubmitGuess checkLetter = { (letter) => this.updateGameState(letter)} />
        <NewGame restart = {this.handleChange } />
       
       
        {console.log(this.state.difficult)}
        {console.log(this.state.question)}
        {console.log(this.wordIsGuessed())}
        {console.log(this.state.checkGameOver)}
        {console.log(this.state.word)}
        </div>
      </div>
       
    );
  }
}

export default Main;
