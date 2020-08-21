import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.secondary};
  padding: 10px;
`;

export const CardScrollContainer = styled(FlatList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const CardContainer = styled.View`
  width: 220px;
  height: 358px;
  margin-top: 20px;
  margin-right: 15px;
  border-radius: 4px;

  background: ${colors.white};

  align-items: center;
`;

export const CardBox = styled.View``;

export const CardImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const CardText = styled.Text.attrs({
  numberOfLines: 2,
})`
  width: 186px;
  color: ${colors.textDescription};
  font-size: 16px;
  margin-top: 10px;
`;

export const CardPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: ${colors.black};
  margin-top: 5px;
`;

export const CardButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  background: ${colors.primary};
  border-radius: 4px;
  margin-top: 14px;
`;

export const CardButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;

  color: ${colors.white};
`;

export const CardQuatityContainer = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 13px;
  background: rgba(0, 0, 0, 0.1);
`;

export const CardQuatity = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  padding-left: 5px;
`;
