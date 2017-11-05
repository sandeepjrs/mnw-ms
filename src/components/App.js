import React from 'react';
import { Link } from 'react-router';
import { version } from '../../package.json';

const App = ({ children }) => (
  <div>
    <header>
      {/* React Starterify */}
      <h1>MNW {version}</h1>
      <Link to="/about">About</Link>
      <Link to="/poweredby">Powered by</Link>
      <Link to="/RegisterClient"> Register New Client</Link>
    </header>
    <section>
      {children || 'Welcome to React MNW'}
    </section>
  </div>
);

App.propTypes = { children: React.PropTypes.object };

export default App;
