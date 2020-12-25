import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';


// class Car extends React.Component{
//     render(){
//     return <h2>I'm Cuong</h2>;
//     }
// }

// class Car extends React.Component {
//     constructor() {
//       super();
//       this.state = {color: "red"};
//     }
//     render() {
//       return <h2>I am a {this.state.color} Car!</h2>;
//     }
//   }
//const myelement = 
//   <input type="text" />;


// class Car extends React.Component {
//     render() {
//       return <h2>I am a Car!</h2>;
//     }
//   }
  
//   class Garage extends React.Component {
//     render() {
//       return (
//         <div>
//         <h1>Who lives in my Garage?</h1>
//         <Car />
//         </div>
//       );
//     }
//   }

// class Car extends React.Component {
//     render() {
//       return <h2>I am a {this.props.brand.name}!</h2>;
//     }
//   }
  
//   class Garage extends React.Component {
//     render() {
//       const carinfo = {name: "Ford", model: "Mustang"};
//       return (
//         <div>
//         <h1>Who lives in my garage?</h1>
//         <Car brand={carinfo} />
//         </div>
//       );
//     }
//   }

class Car extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h2>I am a {this.props.model}!</h2>;
    }
  }


//var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
//ReactDOM.render(<Garage/>, document.getElementById('root'));
ReactDOM.render(<Car model="Mustang"/>, document.getElementById('root'));
reportWebVitals();
