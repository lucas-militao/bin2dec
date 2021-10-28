import React from "react";
import { TextInputProps } from "react-native";

import { 
  Container,
  InputContainer,
  Input,
  ErrorContainer,
  ErrorMessage
} from "./styles";

type Props = TextInputProps & {
  inputError: boolean
};

export function NumberInput({
  inputError,
  ...rest
}: Props) {

  return (
    <Container>
      {
        inputError &&
        <ErrorContainer>
          <ErrorMessage>Entre com valores 0 ou 1</ErrorMessage>
        </ErrorContainer>
      }

      <InputContainer>
        <Input 
          keyboardType="numeric"
          maxLength={8}
          {...rest}
        />
      </InputContainer>
    </Container>
  )
}