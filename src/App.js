import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Routes from './Routes/routes';

/**
 * Main App.
 */
function App() {
  return (
    <div className="main-container">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
