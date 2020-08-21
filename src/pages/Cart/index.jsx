import React from 'react';

import tenis from '../../assets/tenis.jpg';

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

function Cart() {
  return (
    <Container>
      <CartContainer>
        <CartItem>
          <CartItemTop>
            <CartItemTopImage source={tenis} />
            <CartItemTextContainer>
              <CartItemText>
                Tenis muito legal de mais
                feowiefowehfoweifheoifhefoeifhefoeifheofeihe
              </CartItemText>
              <CartItemPrice>R$ 193,99</CartItemPrice>
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

        <CartItem>
          <CartItemTop>
            <CartItemTopImage source={tenis} />
            <CartItemTextContainer>
              <CartItemText>
                Tenis muito legal de mais
                feowiefowehfoweifheoifhefoeifhefoeifheofeihe
              </CartItemText>
              <CartItemPrice>R$ 193,99</CartItemPrice>
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

export default Cart;
