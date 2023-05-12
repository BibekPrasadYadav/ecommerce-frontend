import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'

const Container=styled.div`
`

const Wrapper=styled.div`display:flex;
padding:50px;`
const ImageContainer=styled.div`
flex:1;`
const Img=styled.img`
width:100%;
height:90vh;
object-fit:cover;`

const InfoContainer=styled.div`
flex:1;
padding:0px 50px;`

const Title=styled.h1`
font-weight:200;`

const Desc=styled.p`
margin:20px 0px;`

const Price=styled.span`
font-size:40px;
font-weight: 500;`

const FilterContainer=styled.div`
width:50%;
display:flex;
margin: 30px 0px;
justify-content:space-between;`

const Filter=styled.div`
display:flex;
align-items:center;`

const FilterTitle=styled.span`
font-size:20px;
font-weight: 400;
`
const FilterColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin:0px 5px;
cursor: pointer;`

const FilterSize=styled.select`
margin-left: 10px;
padding: 2.5px;
`
const FilterSizeOption=styled.option`
`

const AddContainer=styled.div`
width: 50%;
display:flex;
align-items:center;
justify-content:space-between;
`
const AmountContainer=styled.div`display:flex;
align-items:center;
font-weight:600;`
const Amount=styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;`

const Button=styled.button`
padding:15px;
border:2px solid teal;
background-color:white;
cursor: pointer;
&:hover{
    background-color: #f8f4f4;
}`
export default function Product() {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
        <ImageContainer>
        <Img src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
        <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black"/>
                <FilterColor color="darkblue"/>
                <FilterColor color="gray"/>
                </Filter>
                <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
                </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
                <Remove/>
                <Amount>1</Amount>
                <Add/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer/>
    </Container>
  )
}
