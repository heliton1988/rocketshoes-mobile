import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import numbro from 'numbro';

import Header from '../../components/Header';

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

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: numbro(product.price).formatCurrency(
        'R$',
        'postfix',
        'BRL'
      ),
    }));

    this.setState({products: data});
  }

  render() {
    const {products} = this.state;

    return (
      <Container>
        <Header navegation={this.props} />

        <CardScrollContainer
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({item}) => (
            <CardContainer key={item.id}>
              <CardBox>
                <CardImage source={{uri: item.image}} />
                <CardText>{item.title}</CardText>
                <CardPrice>{item.priceFormatted}</CardPrice>
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
