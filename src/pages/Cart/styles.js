import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import colors from '../../styles/colors';
import sadIcon from '../../assets/very-sad.png';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${colors.dark3};
  padding: 10px;
`;

export const CartContainer = styled.View`
  background: ${colors.white};
  border-radius: 4px;
  width: 100%;
  max-width: 360px;
  max-height: 620px;
  margin-top: 20px;
  padding: 10px;
`;

export const ScrollContainer = styled.ScrollView``;

export const CartItem = styled.View`
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 12px;
`;

export const CartItemTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CartItemDelete = styled(RectButton)`
  width: 35px;
  height: 28px;
  align-items: center;
  justify-content: center;
`;

export const CartItemTopImage = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

export const CartItemTextContainer = styled.View`
  width: 193px;
`;

export const CartItemText = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  color: ${colors.gray1};
`;

export const CartItemPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.dark1};
`;

export const CartItemBotton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${colors.gray4};
  border-radius: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 10px;
`;

export const ButtonContainer = styled.View`
  width: 130px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonQunatity = styled(RectButton)`
  width: 30px;
  height: 28px;
  align-items: center;
  justify-content: center;
`;

export const CartItemQuatity = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 56px;
  border-radius: 4px;
  padding-top: 3px;
  padding-bottom: 3px;
  background: ${colors.white};
`;

export const CartItemSubTotal = styled.View``;

export const TotalContainer = styled.View`
  margin-top: 30px;
  align-items: center;
`;

export const TotalContainerText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.gray2};
`;

export const TotalContainerPrice = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  font-weight: bold;
  color: ${colors.dark1};
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${colors.orange};
  width: 100%;
  border-radius: 4px;
  padding: 13px;
  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
`;

export const LogoSad = styled.Image.attrs({
  source: sadIcon,
  resizeMode: 'cover',
})`
  width: 60px;
  height: 60px;
  opacity: 0.5;
  margin-bottom: 20px;
`;
