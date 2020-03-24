import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Covid from '../pages/Covid';
import Forms from '../pages/Forms';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/covid" component={Covid} />
        <Route path="/forms" component={Forms} />
      </Switch>
    </BrowserRouter>
  );
}
