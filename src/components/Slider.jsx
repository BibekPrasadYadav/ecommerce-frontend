import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { styled } from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
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
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props)=>props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Img = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: ${props=>props.fs}px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export default function Slider() {
  const [slideIndex,setSlideIndex]=useState(0);

  const handleClick=(direction)=>{
    if(direction==="left"){
      setSlideIndex(slideIndex>0 ? slideIndex-1 : 3);
    }else{
      setSlideIndex(slideIndex<3 ? slideIndex+1 : 0);
    }
  };
  return (
    <Container >
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined></ArrowLeftOutlined>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item)=>(

        
        <Slide bg={item.bg} key={item.id} >
          <ImgContainer>
            <Img src={item.img} />
          </ImgContainer>

          <InfoContainer>
            <Title fs={item.fs}>{item.title}</Title>
            <Desc>
              {item.desc}
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        ))};
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined></ArrowRightOutlined>
      </Arrow>
    </Container>
  );
}
