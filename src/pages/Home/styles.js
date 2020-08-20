import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: ${colors.secondary};
`;

export const Card = styled(FlatList)``;
