import React from "react";
// import './style.css';

// class Casilla extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null
//     }
//   }

//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Casilla(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Casilla;
