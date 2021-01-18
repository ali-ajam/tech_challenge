import React from 'react';
import ReactDOM from 'react-dom';
// react library for routing
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './assets/scss/styles.scss';

import Landing from './views/Landing';
import Table from './views/Table';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact render={() => <Landing />} />
      <Route path='/table' exact render={() => <Table />} />
      <Redirect to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
