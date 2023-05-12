import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  border: none;
  flex:8;
`;
const SearchContainer = styled.div`
width:70%;
  border: 0.5px solid lightgray;
  display: flex;
  justify-content: center;
  margin-left: 25px;
  padding: 5px;
`;

const Left = styled.div`
  flex: 1;
  //text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>HITZKART</Logo>
        </Left>

        <Center>
          <SearchContainer>
            <Input placeholder="Search Item"></Input>
            <Search style={{color:"gray",fontSize:20}}></Search>
          </SearchContainer>
          <Language>EN</Language>
        </Center>

        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined></ShoppingCartOutlined>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
