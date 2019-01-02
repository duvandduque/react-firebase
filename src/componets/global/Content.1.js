import React, { Component } from 'react';
import './css/Header.css';
import './css/Content.css';

class Content extends Component {
  constructor(){
    super();
    this.state={
      count: 0
    };
    console.log(this.props);
  }
  componentDidMount(){
    this.setState({
      count: 1,
      numero1: 0,
      numero2: 0,
      result:0
    });
    this.incrementarcontador = this.incrementarcontador.bind(this);
    this.calculo = this.calculo.bind(this);
    this.cambiarvalor = this.cambiarvalor.bind(this);
  }
  
  incrementarcontador(e){
    console.log(e);
    if(e.target.id==="add"){
      this.setState({
        count: this.state.count+1
      });
    } else if (e.target.id === "resta" && this.state.count>0) {
      this.setState({
        count: this.state.count-1
      });
    }else if(e.target.id==="reset"){
      this.setState({
        count:0
      });
    }
  }
  cambiarvalor(e){
    if(e.target.id==="numero1"){
      this.setState({
        numero1:Number(e.target.value)
      });
    } else if (e.target.id === "numero2") {
      this.setState({
        numero2: Number(e.target.value)
      });
    }
  }
  calculo(e){
    this.setState({
      result:this.state.numero1+this.state.numero2
    });
  }
  render() {
    return (
      <div className="Content">
        <h1>Contenido</h1>
        <h2>Contador: {this.state.count}</h2>
        <button id="add" onClick={this.incrementarcontador}>incrementar</button>
        <button id="resta" onClick={this.incrementarcontador}>restar</button>
        <button id="reset" onClick={this.incrementarcontador}>reset</button>
        <h2>calculadora</h2>
        <input id="numero1" type="number" value={this.state.numero1} onChange={this.cambiarvalor}/>
        +
        <input id="numero2" type="number" value={this.state.numero2} onChange={this.cambiarvalor}/>
        <button id="resultado" onClick={this.calculo}>=</button>
        {this.state.result}
      </div>
    );
  }
}

export default Content;
