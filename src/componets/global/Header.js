import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import protoTypes from "prop-types";
import logo from './imagenes/logo.svg';
import './css/Header.css';
import Items from '../data/Items';

class Header extends Component {
  static protoTypes={
    title: protoTypes.string.isRequired,
    items: protoTypes.array.isRequired
  };
  render() {
    const{title,items}=this.props;
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} alt="logo" />
          <h1>{title}</h1>
          <ul className="Menu">
            {items&& Items.map((item,key)=>
              <li key={key}>
              <Link to={item.url}>{item.title}</Link>
              </li>
              )}
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
