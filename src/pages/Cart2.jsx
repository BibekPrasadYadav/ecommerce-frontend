import React from 'react'
import Navbar from '../components/Navbar'
import { styled } from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { CurrencyRupee } from '@mui/icons-material'

const Container=styled.div`
height:60px;`
const Wrapper=styled.div``
const Title=styled.h1`
padding: 10px 20px;
font-weight: 400;
font-style: 12px;`

const Left=styled.div`
flex:1;`
const Center=styled.div`
flex:2;
`
const Right=styled.div`
flex:1;
margin-left: 80px;
  `
const CartContainer=styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;`

const ImageContainer=styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const DetailContainer=styled.div`display:flex;
justify-content: space-between;
width:100%;
margin:20px 0px;`
const Image=styled.img`
width:70%;`
const InfoContainer=styled.div`
flex:4;`
const Info=styled.p`
width:85%;`
const PriceContainer=styled.div`
flex:1;
`
const Price=styled.div`
font-size:24px;`
const PriceTitle=styled.span``

export default function Cart2() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>Shopping Cart</Title>
            <CartContainer>
            <Left>
                <ImageContainer>
                    <Image src='https://m.media-amazon.com/images/I/7171Isb+XAL._SX425_.jpg'></Image>
                </ImageContainer>
            </Left>
            <Center>
            <DetailContainer>
                <InfoContainer>
                    <Info>Digway 8+1 Round Strip Extension Cord 6 A 8 Universal Socket Multi Plug Point Extension Board with LED Indicator and Switch (Cable Length: 2.0 Meter, 230Volt ,Cream)</Info>
                    </InfoContainer>
                    <PriceContainer>
                        <PriceTitle>Price</PriceTitle>
                    <Price><CurrencyRupee/>219.00</Price>
                    </PriceContainer>
                    </DetailContainer>
            </Center>
            <Right>
                
            </Right>
            </CartContainer>
        </Wrapper>
        <Footer/>
    </Container>
  )
}
