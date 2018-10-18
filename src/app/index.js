import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import { Login } from './components';

class App extends Component {
  render() {
    return (
      <Container>
        <Login />
      </Container>
    );
  }
}

export default App;
