import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';
import {formatPrice} from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  CartContainer,
  ScrollContainer,
  CartItem,
  CartItemTop,
  CartItemDelete,
  CartItemTopImage,
  CartItemTextContainer,
  CartItemText,
  CartItemPrice,
  CartItemBotton,
  ButtonQunatity,
  ButtonContainer,
  CartItemQuatity,
  CartItemSubTotal,
  TotalContainer,
  TotalContainerText,
  TotalContainerPrice,
  ButtonText,
  Button,
  LogoSad,
} from './styles';

function Cart({cart, total, updateAmountRequest, removeFromCart}) {
  const navigation = useNavigation();

  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

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
                <CartItemDelete onPress={() => removeFromCart(product.id)}>
                  <Icon name="delete" size={20} color={colors.orange} />
                </CartItemDelete>
              </CartItemTop>
              <CartItemBotton>
                <ButtonContainer>
                  <ButtonQunatity onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color={colors.orange}
                    />
                  </ButtonQunatity>
                  <CartItemQuatity>
                    <CartItemText>{product.amount}</CartItemText>
                  </CartItemQuatity>

                  <ButtonQunatity onPress={() => increment(product)}>
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color={colors.orange}
                    />
                  </ButtonQunatity>
                </ButtonContainer>
                <CartItemSubTotal>
                  <CartItemPrice>{product.subtotal}</CartItemPrice>
                </CartItemSubTotal>
              </CartItemBotton>
            </CartItem>
          ))}
        </ScrollContainer>

        {cart.length !== 0 ? (
          <TotalContainer>
            <TotalContainerText>TOTAL</TotalContainerText>
            <TotalContainerPrice>{total}</TotalContainerPrice>
            <Button>
              <ButtonText>FINALIZAR PEDIDO</ButtonText>
            </Button>
          </TotalContainer>
        ) : (
          <TotalContainer>
            <LogoSad />
            <TotalContainerText>
              OPS! SEU CARRINHO ESTÁ VAZIO
            </TotalContainerText>
            <Button onPress={() => navigation.navigate('Home')}>
              <ButtonText>VOLTAR PARA HOME</ButtonText>
            </Button>
          </TotalContainer>
        )}
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
