import React, { useState } from "react";
import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 20px;
`;

const Filter = styled.div``;

const FilterText = styled.span`
  margin: 20px;
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
`;
const Option = styled.option``;
export default function ProductList() {
  const location = useLocation(); //To access the current object location
  const cat = location.pathname.split("/")[2]; //To get the 2nd value of pathname i.e /products/coat then output will be coat
  const [filter, setFilters] = useState({});
  const [sort,setSorts]=useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value;

    setFilters({
      ...filter,
      [e.target.name]: value,
    });
  };
  console.log(filter);
  

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>Brown</Option>

          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e)=>setSorts([e.target.value])}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort}/>
      <NewsLetter />
      <Footer />
    </Container>
  );
}
