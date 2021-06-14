import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import PaginaInicial from './PaginaInicial/Inicial'; 

  const Root = () => {
      return (
          <Router>
              <Switch>
                  <Route path="/" component={PaginaInicial} />
              </Switch>
          </Router>
      )
  }

  export default Root;