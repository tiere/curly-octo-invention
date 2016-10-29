import { IndexRoute, Route } from 'react-router';
import App                   from './components/app';
import Dashboard             from './components/dashboard';
import React                 from 'react';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
  </Route>
);
