import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {formatPrice} from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

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
    const {addToCart} = this.props;

    addToCart(product);
  };

  render() {
    const {products} = this.state;
    const {amount} = this.props;

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
                    <CardQuatity>{amount[product.id] || 0}</CardQuatity>
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

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
