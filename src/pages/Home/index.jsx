import React from 'react';
import {Text} from 'react-native';

import {Container, Card} from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  render() {
    const {products} = this.state;

    return (
      <Container>
        <Card />
      </Container>
    );
  }
}

export default Home;
