import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  margin: 64px 0;
`;

export const ErrorContainer = styled.View``;

export const ErrorMessage = styled.Text`
  font-size: ${RFValue(14)}px;
  color: red;
  font-weight: 500;
`;

export const InputContainer = styled.View`
  padding: 10px 16px;

  border-color: black;
  border-width: 1px;
  border-radius: 14px;
`;

export const Input = styled.TextInput`
  font-size: ${RFValue(24)}px;
`;