import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  padding: 16px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  font-weight: bold;
`;

export const ResultContainer = styled.View``;

export const Result = styled.Text`
  font-size: ${RFValue(20)}px;
`;

