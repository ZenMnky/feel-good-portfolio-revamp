import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PageNotFound from '../Old-Components/PageNotFound/PageNotFound';

import LandingView from '../Views/LandingView';

console.log('Pursue what is meaningful, not what is expedient');

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingView} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
