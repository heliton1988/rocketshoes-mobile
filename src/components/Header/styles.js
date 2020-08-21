import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import colors from '../../styles/colors';
import logo from '../../assets/logo.png';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const LogoContainer = styled(RectButton)`
  justify-content: center;
  align-items: center;
`;

export const BasketContainer = styled(RectButton)`
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

export const BasketCounter = styled.View`
  max-width: 24px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: ${colors.primary};

  align-items: center;
  justify-content: center;

  position: absolute;
  top: -6px;
  right: -7px;
`;

export const BasketCounterText = styled.Text`
  color: ${colors.white};
  font-size: 12px;
`;
