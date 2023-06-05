import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  background-color: white;
  color: gray;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
`;
export default function CategoryItems({ item }) {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Img src={item.img} />
      <InfoContainer>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </InfoContainer>
      </Link>
    </Container>
  );
}
