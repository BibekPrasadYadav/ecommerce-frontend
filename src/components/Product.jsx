import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import { styled } from "styled-components";

const Info = styled.div`
  opacity: 0;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.5s ease;
  background-color: #f5fbfd;
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Img = styled.img`
  height: 75%;
  z-index: 2;
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
  cursor: pointer;
`;
export default function Product({ item }) {
  return (
    <Container>
      <Circle />
      <Img src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
      </Info>
    </Container>
  );
}
