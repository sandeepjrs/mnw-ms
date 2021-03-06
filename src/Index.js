import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import App from './components/App';
import PoweredBy from './components/Powered-by';
import About from './components/About';
import RegisterClient from './components/RegisterClient';

window.React = React;

render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/poweredby" component={PoweredBy} />
      <Route path="/RegisterClient" component={RegisterClient} />
   </Route>
  </Router>), document.getElementById('content')
);
