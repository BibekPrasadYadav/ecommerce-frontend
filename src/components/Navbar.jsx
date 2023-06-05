import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { UserGroupIcon } from '@heroicons/react/solid';
import { LogoutIcon } from '@heroicons/react/outline';
import { useCallback, useState } from 'react';
import { logout } from "../redux/userRedux";



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
  margin-left: 70px;
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

const UsernameItem=styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
`

export default function Navbar() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch=useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = useCallback(() => dispatch(logout()), [dispatch]);
  
  
  const quantity=useSelector(state=>state.cart.quantity)
 
  return (
    <Container className="h-[50px] sm:h-[60px] ">
    <Wrapper className="py-[10px] sm:px-[20px] flex justify-between items-center">
      

    <Left className="flex-1 text-center">
        <Link href="/">
          <Logo className="font-bold text-[24px] sm:text-3xl cursor-pointer ">
            HITZKART
          </Logo>
        </Link>
      </Left>

      <Center className="flex-1 flex items-center">
        <Language className="text-[14px] cursor-pointer hidden sm:inline">
          EN
        </Language>
        <SearchContainer className="border flex items-center ml-[25px] p-[5px] ">
          <Input
            placeholder="Search Item"
            type="text"
            className="outline-none w-[50px] sm:w-auto "
          />
          <Search className="text-gray-400 text-[16px] " />
        </SearchContainer>
      </Center>


      

      <Right className="flex-[2] sm:flex-1 flex items-center justify-center sm:justify-end ">
        {!user && (
          <>
            <MenuItem className="text-[12px] sm:text-[14px] cursor-pointer ml-[10px] sm:ml-[25px] ">
              <Link to="/register">REGISTER</Link>
            </MenuItem>
            <MenuItem className="text-[12px] sm:text-[14px] cursor-pointer ml-[10px] sm:ml-[25px] ">
              <Link to="/login">LOGIN IN</Link>
            </MenuItem>
          </>
        )}
        {user && (
          <>
            <MenuItem
              onClick={() => setShowPopup((prev) => !prev)}
              className="relative cursor-pointer ml-[10px] border  space-x-3 rounded p-2 flex justify-between items-center "
            >
              <UsernameItem>
              <MenuItem className="text-[12px] sm:text-[14px] tracking-wide ">
                {user?.username.toUpperCase()}
              </MenuItem>
              <MenuItem
                onClick={handleLogout}  
              >
                <button className="text-[12px] sm:text-[14px] ">
                  LOGOUT
                </button>
              </MenuItem>
              </UsernameItem>
            </MenuItem>
          </>
        )}
        <MenuItem>
        <Link to="/cart">
          <Badge
            className="ml-[10px] sm:ml-[25px] cursor-pointer"
            badgeContent={quantity}
            color="primary"
          >
            <ShoppingCartOutlined />
          </Badge>
        </Link>
        </MenuItem>
      </Right>
    </Wrapper>
  </Container>
  );
 
}


