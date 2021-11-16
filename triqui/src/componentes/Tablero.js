import React from 'react';
// import './style.css';
import Casilla from './Casilla';

class Tablero extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      casillas: Array(9).fill(null),
      esO: false
    }
  }

  handleClick(i) {
    const casillas = this.state.casillas.slice();
    if(calulaGanador(casillas) || casillas[i]) {
      return;
    }
    casillas[i] = this.state.esO ? 'O' : 'X';
    this.setState({casillas: casillas, esO: !this.state.esO})
  }

  renderizarCasilla(i) {
    return <Casilla value={this.state.casillas[i]} onClick={() => this.handleClick(i)}/>
  }

  render() {
    // const estado = `Jugador: ${this.state.esO ? 'O' : 'X'}`;
    const ganador = calulaGanador(this.state.casillas);
    let estado;
    if (ganador) {
      estado = `${ganador} gano!`;
    } else {
      estado = `Jugador: ${this.state.esO ? 'O' : 'X'}`;
    }

    return (
      <div>
      <div className="status">
        { estado }
      </div>

      <div className="board-row">
        {this.renderizarCasilla(0)}
        {this.renderizarCasilla(1)}
        {this.renderizarCasilla(2)}
      </div>

      <div className="board-row">
        {this.renderizarCasilla(3)}
        {this.renderizarCasilla(4)}
        {this.renderizarCasilla(5)}
      </div>

      <div className="board-row">
        {this.renderizarCasilla(6)}
        {this.renderizarCasilla(7)}
        {this.renderizarCasilla(8)}
      </div>
    </div>
    )
  }
}

function calulaGanador(casillas) {
  const matrizGanadores = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ];
  for (let i = 0; i < matrizGanadores.length; i++) {
    const [x, y, z] = matrizGanadores[i];
    if (casillas[x] && casillas[x] === casillas[y] && casillas[x] === casillas[z]) {
      return casillas[x];
    }
  }
  return null;
}

export default Tablero;
