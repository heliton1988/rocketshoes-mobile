import React from 'react';
import {connect} from 'react-redux';

import {
  Container,
  CartContainer,
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

function Cart({cart}) {
  return (
    <Container>
      <CartContainer>
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
                <CartItemText>4</CartItemText>
              </CartItemQuatity>
              <CartItemSubTotal>
                <CartItemPrice>R$ 545,89</CartItemPrice>
              </CartItemSubTotal>
            </CartItemBotton>
          </CartItem>
        ))}

        <TotalContainer>
          <TotalContainerText>TOTAL</TotalContainerText>
          <TotalContainerPrice>R$ 987,00</TotalContainerPrice>
          <Button>
            <ButtonText>FINALIZAR PEDIDO</ButtonText>
          </Button>
        </TotalContainer>
      </CartContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
