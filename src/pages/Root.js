import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import PaginaInicial from './PaginaInicial/Inicial'; 
import PagesCadastro from './Cadastro/Cadastro';

  const Root = () => {
      return (
          <Router>
              <Switch>
                  <Route path="/cadastro" component={PagesCadastro} />
                  <Route path="/edit/:id" component={PagesCadastro} />
                  <Route path="/" component={PaginaInicial} />
              </Switch>
          </Router>
      )
  }

  export default Root;