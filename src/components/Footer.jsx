import {
    Call,
  Email,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import { styled } from "styled-components";


const Container = styled.div`
  
  display: flex;
  
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
 
  
`;
const Logo = styled.h1`
`;
const Desc = styled.div`
margin: 20px 0px;
`;
const SocialContainer = styled.div`
display:flex;

`;

const SocialIcon = styled.div`

width: 40px;
height: 40px;
color:white;
border-radius: 50%;
background-color:#${props=>props.color};
display:flex;
align-items:center;
justify-content:center;
margin-right:2px;
`;

const Center = styled.div`
  flex: 1;
  padding:20px;
`;

const Title=styled.h3`
margin-bottom:15px;`

const List=styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
cursor: pointer;`

const ListItem=styled.li`
width:50%;
margin-bottom:10px;`

const Right = styled.div`
  flex: 1;
  padding:20px;
`;
const Contact=styled.div`

`

const ContactItem=styled.div`
display: flex;
align-items: center;
margin-bottom:10px;`


const Payment=styled.img``
export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>HITZKART</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="0072b1">
            <LinkedIn />
          </SocialIcon>
          <SocialIcon color="171515">
            <GitHub />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>
            Useful Links
        </Title>
        <List>
        <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <Contact>
            <ContactItem><Room style={{marginRight:"10px"}}/>Bengaluru,Karnataka 560056</ContactItem>
            <ContactItem><Call style={{marginRight:"10px"}}/>8547612458</ContactItem>
            <ContactItem><Email style={{marginRight:"10px"}}/>bibek.prasad@gmail.com</ContactItem>
        </Contact>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
}
