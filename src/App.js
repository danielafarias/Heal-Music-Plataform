import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Favorites from './Components/Favorites';

function App() {
  return (
      <div className="App">
        <Switch>
          <Route path='/' exact={true} component={Dashboard}></Route>
          <Route path='/favorites' component={Favorites}></Route>
        </Switch>
      </div>
  );
}

export default App;
