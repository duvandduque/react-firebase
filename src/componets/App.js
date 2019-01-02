import React, { Component } from 'react';
import propTypes from "prop-types";
import Header from "./global/Header"
import Content from './global/Content';
import Footer from './global/Footer';
import Items from './data/Items';

class App extends Component {
    static propTypes={
      children: propTypes.object.isRequired
    };  
  render() {
    const {children}=this.props;
    return (
      <div className="App">
        <Header title="Bienvenido" items={Items}/>
        <Content body={children}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
