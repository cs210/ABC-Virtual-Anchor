import React from 'react';

import { Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
        <Redirect from="/" to="dashboard" />
        </nav>
      </div>
    )
  }
}

export default App;
