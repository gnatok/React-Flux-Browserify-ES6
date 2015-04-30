'use strict';

import React from 'react';
import MainComponent from './components/main.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <MainComponent />
      </div>
    );
  }
};

React.render(<App />, document.getElementById('main'));