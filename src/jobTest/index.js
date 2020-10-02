import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Models from './layout/models';
import MenuDeNavegacion from './components/navegationMenu/NavegationMenu';
import FichaDelVehiculo from './layout/datasheet/index';

const App = () => (
  <main style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
    <Router>
      <MenuDeNavegacion />
      <div style={{ flex: 1 }}>
        <Switch>
          <Route path="/ficha">
            <FichaDelVehiculo />
          </Route>
          <Route path="/">
            <Models />
          </Route>
        </Switch>
      </div>
      <footer style={{ height: 50, backgroundColor: 'black' }} />
    </Router>
  </main>
);

export default App;