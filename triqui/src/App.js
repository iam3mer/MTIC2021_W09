import React  from 'react';
// import './style.css';
import Tablero from './componentes/Tablero';

class Triqui extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Tablero/>
        </div>
      </div>
    )
  }
}

export default Triqui;
