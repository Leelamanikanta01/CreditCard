import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  Heading,
  CreditContainer,
  Title,
  Name,
  CardNumber,
  InputContainer,
  InputFiled,
  InputTitle,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNum, setNum] = useState('')
  const [name, setName] = useState('')

  const onChangeNumber = event => {
    setNum(event.target.value)
  }

  const onChangeName = event => {
    setName(event.target.value)
  }

  return (
    <MainContainer>
      <CardContainer>
        <Heading>CREDIT CARD</Heading>
        <CreditContainer data-testid="creditCard">
          <CardNumber>{cardNum}</CardNumber>
          <Title>CARDHOLDER NAME</Title>
          <Name>{name}</Name>
        </CreditContainer>
      </CardContainer>
      <InputContainer>
        <InputFiled>
          <InputTitle>Payment Method</InputTitle>
          <Input
            placeholder="Card Number"
            value={cardNum}
            onChange={onChangeNumber}
          />
          <Input
            value={name}
            placeholder="Cardholder Name"
            onChange={onChangeName}
          />
        </InputFiled>
      </InputContainer>
    </MainContainer>
  )
}

export default CreditCard
