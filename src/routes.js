import React from 'react';
import {Route, Switch } from 'react-router-dom';
import App from "./componets/App";
import Acercade from "./componets/acercade";
import contacto from "./componets/contacto";
import home from "./componets/home";
import pagina_no_encontrada from "./componets/pagina404";

const Approutes= ()=>
    <App>
      <Switch>
          <Route exact path="/acercade" component={Acercade} />
          <Route exact path="/contacto" component={contacto} />
          <Route exact path="/" component={home} />
          <Route component={pagina_no_encontrada} />
      </Switch>
    </App>;

export default Approutes;



