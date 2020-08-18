import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Logo, BasketContainer} from './styles';

function Header({navegation}) {
  function handleNavigate() {
    navegation.navegate('Cart');
  }

  return (
    <Container>
      <Logo />

      <BasketContainer onPress={handleNavigate}>
        <Icon name="shopping-basket" size={20} color="#fff" />
      </BasketContainer>
    </Container>
  );
}

export default Header;
