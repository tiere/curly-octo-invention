import                                 'bootstrap-loader';
import { Router, browserHistory } from 'react-router';
import React                      from 'react';
import { render }                 from 'react-dom';
import routes                     from './routes';

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
