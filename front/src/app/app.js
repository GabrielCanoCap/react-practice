import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { InputPageExample } from "./domains/example";

import './app.scss';

const App = () => (
  <div className="app">
    <Router>
      <Switch>
        <Route path="/example">
          <InputPageExample />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
