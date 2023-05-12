import { Send } from "@material-ui/icons";
import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
font-size:70px;
margin-bottom:20px;`;

const Desc = styled.div`
font-size:24px;
font-weight:400;
margin-bottom:20px`;

const InputContainer = styled.div`
width: 35%;
height: 40px;
background-color: white;
display:flex;
justify-content:space-between;
border: 1px solid lightgray;`;

const Input = styled.input`
border:none;
flex:9;`;

const Button = styled.button`
flex:1;
font-size: 8px;
background-color:teal;
color:white;
border:none;
cursor:pointer;`;
export default function NewsLetter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get Timely updates from your favourite products.</Desc>
      <InputContainer>
        <Input placeholder="Your Email" />

        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}
