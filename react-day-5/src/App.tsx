import React, { Suspense } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './components/home/home';
const EditProfile = React.lazy(() =>
  import('./components/user-profile/edit-profile')
);

export function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/' exact={true}>
            <Home />
          </Route>
          <Route path='/edit-profile'>
            <Suspense fallback={<div>Loading...</div>}>
              <EditProfile />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
