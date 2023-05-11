import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import { styled } from 'styled-components'


const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #55b555;
    position: relative;
`

const Arrow=styled.div`
width: 50px;
height: 50px;
display: flex;
background-color: white;
border-radius: 50%;
justify-content: center;
align-items: center;
cursor: pointer;
position: absolute;
top: 0;
bottom: 0;
left: ${props=>props.direction === "left" && "10px"};
right: ${props=>props.direction === "right" && "10px"};
margin: auto;
opacity: 0.5;
`
const Wrapper=styled.div`
  height: 100%;
`
const Slide=styled.div`
width: 100vw;
height: 100vh;
display: flex;
  align-items: center;`

const ImgContainer=styled.div`
flex:1;
height:100%`

const Img=styled.img`
height:80%`

const InfoContainer=styled.div`
height: 100%;
flex:1;
padding:50px`

const Title=styled.h1``
const Desc=styled.p``

const Button=styled.button`
cursor:pointer;`


export default function Slider() {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined></ArrowLeftOutlined>
        </Arrow>
        <Wrapper>
          <Slide>
        <ImgContainer>
          <Img src="https://images.herzindagi.info/image/2023/May/Amazon-Great-Summer-Sale-2023-dresses-for-women.jpg"/>
        </ImgContainer>

        <InfoContainer>
        <Title>Rohit Sharma</Title>
        <Desc>He is one of the greatest cricketer of all time</Desc>
        <Button>Click</Button>
        </InfoContainer>
        </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined></ArrowRightOutlined>
        </Arrow>
    </Container>
  )
}
