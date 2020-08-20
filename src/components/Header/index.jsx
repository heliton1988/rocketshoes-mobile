import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Logo, LogoContainer, BasketContainer} from './styles';

function Header() {
  const navigation = useNavigation();

  return (
    <Container>
      <LogoContainer onPress={() => navigation.navigate('Home')}>
        <Logo />
      </LogoContainer>

      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={20} color="#fff" />
      </BasketContainer>
    </Container>
  );
}

export default Header;
