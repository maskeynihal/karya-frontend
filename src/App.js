import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Routes from './Routes/routes';
import DefaultLayout from 'Views/layouts/default';
/**
 * Main App.
 */
function App() {
  return (
    <div className="main-container">
      <Router>
        <DefaultLayout>
          <Routes>
            <Route path="/hello" component={() => <div>nevermind</div>} />
          </Routes>
        </DefaultLayout>
      </Router>
    </div>
  );
}

export default App;
