import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';

import {formatPrice} from '../../util/format';
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
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({products: data});
  }

  handleAddToCart = product => {
    const {dispatch} = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const {products} = this.state;

    return (
      <Container>
        <CardScrollContainer
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({item: product}) => (
            <CardContainer key={product.id}>
              <CardBox>
                <CardImage source={{uri: product.image}} />
                <CardText>{product.title}</CardText>
                <CardPrice>{product.priceFormatted}</CardPrice>
                <CardButton onPress={() => this.handleAddToCart(product)}>
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

export default connect()(Home);
