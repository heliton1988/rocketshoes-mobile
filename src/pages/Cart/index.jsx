import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {formatPrice} from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  CartContainer,
  ScrollContainer,
  CartItem,
  CartItemTop,
  CartItemTopImage,
  CartItemTextContainer,
  CartItemText,
  CartItemPrice,
  CartItemBotton,
  CartItemQuatity,
  CartItemSubTotal,
  TotalContainer,
  TotalContainerText,
  TotalContainerPrice,
  ButtonText,
  Button,
} from './styles';

function Cart({cart, total}) {
  return (
    <Container>
      <CartContainer>
        <ScrollContainer>
          {cart.map(product => (
            <CartItem key={product.id}>
              <CartItemTop>
                <CartItemTopImage source={{uri: product.image}} />
                <CartItemTextContainer>
                  <CartItemText>{product.title}</CartItemText>
                  <CartItemPrice>{product.priceFormatted}</CartItemPrice>
                </CartItemTextContainer>
              </CartItemTop>
              <CartItemBotton>
                <CartItemQuatity>
                  <CartItemText>{product.amount}</CartItemText>
                </CartItemQuatity>
                <CartItemSubTotal>
                  <CartItemPrice>{product.subtotal}</CartItemPrice>
                </CartItemSubTotal>
              </CartItemBotton>
            </CartItem>
          ))}
        </ScrollContainer>

        <TotalContainer>
          <TotalContainerText>TOTAL</TotalContainerText>
          <TotalContainerPrice>{total}</TotalContainerPrice>
          <Button>
            <ButtonText>FINALIZAR PEDIDO</ButtonText>
          </Button>
        </TotalContainer>
      </CartContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
