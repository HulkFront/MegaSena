import React from 'react';
import './App.css';
import logoImage from './assets/logo10.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoImage} className="App-logo" alt="logo" />
        <br/><br/>
        <p>Selecione o jogo desejado!</p>  
        <p><center>
          <a class="btn btn-primary" data-toggle="collapse" href="#Mega" role="button" aria-expanded="true" aria-controls="Mega">
            Mega Sena</a>
            <br/>          
          <a class="btn btn-primary" data-toggle="collapse.show" href="#Quina" role="button" aria-expanded="true" aria-controls="Quina">
            Quina</a>
        </center></p>
      </header> 
    </div>
  );
}
export default App;