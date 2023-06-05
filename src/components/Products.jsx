import { styled } from "styled-components"
import Product from "./Product"
import { popularProducts } from "../data"
import { useEffect, useState } from "react"
import axios from "axios"

const Container=styled.div`
display:flex;
padding:20px;
flex-wrap:wrap;
justify-content:space-between;`

export default function Products({cat,filter,sort}) {
console.log(cat,filter,sort)


const [products,setProducts]=useState([])
const [filteredProducts,setFilteredProducts]=useState([])
useEffect(()=>{
  const getProducts=async()=>{
    try{
      const res=await axios.get(cat ? `http://localhost:5000/api/products/findall?category=${cat}` : 
      "http://localhost:5000/api/products/findall");
      setProducts(res.data)
    }catch(err){

    }
  }
  getProducts()
},[cat]);

useEffect(()=>{
  cat && setFilteredProducts(
    products.filter(item=>Object.entries(filter).every(([key,value])=>
    item[key].includes(value)
    ))
  )
},[products,cat,filter]);

useEffect(()=>{
  if((sort==="newest")){
    setFilteredProducts((prev)=>
    [...prev].sort((a,b)=>a.createdAt- b.createdAt)
    );
  }else if(sort==="asc"){
    setFilteredProducts((prev)=>
    [...prev].sort((a,b)=>a.price- b.price)
    );
  }else{
    setFilteredProducts((prev)=>
    [...prev].sort((a,b)=>b.price- a.price)
    );
  }
},[])
  return (

    <Container>
        {cat ? filteredProducts.map((item)=><Product item={item} key={item.id}/>)
        : products.slice(0,8).map((item)=><Product item={item} key={item.id}/>
        )}   
    </Container>
  )
}
