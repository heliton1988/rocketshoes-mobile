import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Logo,
  LogoContainer,
  BasketContainer,
  BasketCounter,
  BasketCounterText,
} from './styles';

function Header({cartSize}) {
  const navigation = useNavigation();

  return (
    <Container>
      <LogoContainer onPress={() => navigation.navigate('Home')}>
        <Logo />
      </LogoContainer>

      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        {cartSize === 0 ? (
          <Icon name="shopping-basket" size={20} color="#fff" />
        ) : (
          <>
            <Icon name="shopping-basket" size={20} color="#fff" />
            <BasketCounter>
              <BasketCounterText>{cartSize}</BasketCounterText>
            </BasketCounter>
          </>
        )}
      </BasketContainer>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
