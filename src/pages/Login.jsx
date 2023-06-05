import React, { useState } from 'react'
import { styled } from 'styled-components'
import {mobile} from "../Responsive";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';
const Container=styled.div`
width:100vw;
height: 100vh;

background:
linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ), url("https://images.pexels.com/photos/5625040/pexels-photo-5625040.jpeg??auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center ;
    background-size: cover;
    display:flex;
align-items:center;
justify-content:center;
`
const Wrapper=styled.div`
padding: 20px;
width: 25%;
background-color: white;
${mobile({ width: "75%" })}
`
const Form=styled.form`
display:flex;
flex-direction:column;`

const Input=styled.input`
flex:1;
min-width: 40%;
margin:10px 0px;
padding:8px;
`


const Title=styled.h1`
font-size:24px;
font-weight:400;`

const Button=styled.button`
width: 40%;
border: none;
padding: 10px 15px;
background-color: teal;
color: white;
font-size: 15px;
margin-bottom: 5px;
cursor: pointer;
`

const Link=styled.a`
font-size: 12px;
margin: 5px 0px;
text-decoration: underline;
cursor: pointer;
`
const Error=styled.div`
  color:red
`

export default function Login() {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch()
  const {isFetching,error}=useSelector((state)=>state.user)

  const handleClick=(e)=>{
    e.preventDefault()
    login(dispatch,{username,password})
  }
  return (
    <Container >
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
        
        <Input placeholder='Username or Email' onChange={(e)=>setUsername(e.target.value)}/>
        <Input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
        {error && <Error>Something went wrong...</Error>}
        <Link>Forget Password</Link>
        <Link>Create a new account</Link>
        </Form>
        </Wrapper>
    </Container>
  )
}
