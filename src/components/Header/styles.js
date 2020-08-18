import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import logo from '../../assets/logo.png';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled(RectButton)`
  justify-content: center;
  align-items: center;
`;
