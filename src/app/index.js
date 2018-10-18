import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import { Main } from './components';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Main />
      </Container>
    );
  }
}

export default App;
