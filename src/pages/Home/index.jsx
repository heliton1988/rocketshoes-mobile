import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {formatPrice} from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Tittle,
  ScrollContainer,
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

  handleAddToCart = id => {
    const {addToCartRequest} = this.props;

    addToCartRequest(id);
  };

  render() {
    const {products} = this.state;
    const {amount} = this.props;

    return (
      <Container>
        <ScrollContainer>
          <Tittle>RUNNING</Tittle>

          <CardScrollContainer
            data={products}
            keyExtractor={product => String(product.id)}
            renderItem={({item: product}) => (
              <CardContainer key={product.id}>
                <CardBox>
                  <CardImage source={{uri: product.image}} />
                  <CardText>{product.title}</CardText>
                  <CardPrice>{product.priceFormatted}</CardPrice>
                  <CardButton onPress={() => this.handleAddToCart(product.id)}>
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

          <Tittle>CAMINHADA</Tittle>

          <CardScrollContainer
            data={products}
            keyExtractor={product => String(product.id)}
            renderItem={({item: product}) => (
              <CardContainer key={product.id}>
                <CardBox>
                  <CardImage source={{uri: product.image}} />
                  <CardText>{product.title}</CardText>
                  <CardPrice>{product.priceFormatted}</CardPrice>
                  <CardButton onPress={() => this.handleAddToCart(product.id)}>
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

          <Tittle>TRILHA</Tittle>

          <CardScrollContainer
            data={products}
            keyExtractor={product => String(product.id)}
            renderItem={({item: product}) => (
              <CardContainer key={product.id}>
                <CardBox>
                  <CardImage source={{uri: product.image}} />
                  <CardText>{product.title}</CardText>
                  <CardPrice>{product.priceFormatted}</CardPrice>
                  <CardButton onPress={() => this.handleAddToCart(product.id)}>
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
        </ScrollContainer>
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
