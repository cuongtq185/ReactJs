import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
class App extends Component {
  onclick(){
    console.log('Đây là app component');
  }

  onclick2= () =>{
    alert(this.props.children + '-' + this.props.price );
  }
  render() {
    return (
      <div>

        <Header />
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product />   
                    
          </div>

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product />
          </div>
        </div>
        <button type= "button" className="btn btn-warnning" onClick= {this.onclick2}>onClick</button>
      </div>
    );
  }
}

export default App;
