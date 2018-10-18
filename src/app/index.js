import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import { Main } from './features/app';

class Root extends Component {
  render() {
    return (
      <Container fluid>
        <Main />
      </Container>
    );
  }
}

export default Root;
