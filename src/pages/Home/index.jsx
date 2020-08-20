import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  Container,
  CardScrollContainer,
  CardContainer,
  CardBox,
  CardImage,
  CardText,
  CardPrice,
  CardButton,
  CardButtonText,
  CardQuatityContainer,
  CardQuatity,
} from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get(`products`);

    const products = response.data;

    this.setState({products});
  }

  render() {
    const {products} = this.state;

    return (
      <Container>
        <CardScrollContainer
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({item}) => (
            <CardContainer key={item.id}>
              <CardBox>
                <CardImage source={{uri: item.image}} />
                <CardText>{item.title}</CardText>
                <CardPrice>R$ {item.price}</CardPrice>
                <CardButton onPress={() => {}}>
                  <CardQuatityContainer>
                    <Icon name="shopping-cart" size={20} color="#fff" />
                    <CardQuatity>1</CardQuatity>
                  </CardQuatityContainer>
                  <CardButtonText>ADICIONAR</CardButtonText>
                </CardButton>
              </CardBox>
            </CardContainer>
          )}
        />
      </Container>
    );
  }
}

export default Home;
