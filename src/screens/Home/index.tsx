import React, { useState } from "react";

import { NumberInput } from "../../components/NumberInput";

import {
  Container,
  Title,
  ResultContainer,
  Result,
} from './styles';

export function Home() {
  const [binaryNumber, setBinaryNumber] = useState('');
  const [decimalNumber, setDecimalNumber] = useState('0');
  const [errorMessageShow, setErrorMessageShow] = useState(false);

  function handleUserInput(userInput: string) {
    setErrorMessageShow(userInput.match(/^[0-1]+$/g) === null && userInput !== '');

    setBinaryNumber(userInput);
    setDecimalNumber( userInput !== ''
      ? parseInt(userInput, 2).toString()
      : '0'
    );
  } 

  return(
    <Container>
      <Title>Bin2Dec</Title>

      <NumberInput
        value={binaryNumber}
        onChangeText={(userInput) => handleUserInput(userInput)}
        inputError={errorMessageShow}
      />

      <ResultContainer>
        <Result>Valor Decimal: {decimalNumber}</Result>
      </ResultContainer>
    </Container>
  )
}