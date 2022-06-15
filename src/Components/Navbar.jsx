import { Avatar } from '@mui/material';
import { Box, Container } from '@mui/system'
import Button from '@mui/material/Button';
import React from 'react'
import india from '../assests/india.png'
import logo from '../assests/download.png'
import search from '../assests/search.png'
import styled from "styled-components"
const Navbar = () => {
    const Container=styled.div`
    width: 100%;
    `;
    const Avatar=styled.img`
        height:26px;
        position:relative;
        left:5%;
        padding:2px
        
    `;
    const Ship=styled.span`
    color: #b7b5b5;
    margin-top: 5px;
    position:absolute
    `;
    const Country=styled.span`
        position:absolute;
        margin-top: 5px;
        left:8%;
    `
    const Logo=styled.img`
        box-sizing: border-box;
        height:100%;
        padding: 17px;
    `;

  
    const Input=styled.input`
         background-color: #fafbfd;
         border: 1px solid lightgray;
         height: 30px;
         width:45%;
         position:absolute;
         border-radius: 5px;
         top:48px;
         left:15% ;
         padding-left: 10px;
    `;
    const Button=styled.button`
         background-color: tomato;
         border-radius: 5px;
         position: absolute;
         border:none ;
         height: 33px;
         width: 40px;
         left:60%;
         top: 48px;
    `;
    const Search=styled.img`
         width: 20px;
    `;
    
  return (
    <div>
        <Container >
        <Box sx={{ bgcolor: 'rgb(249,250,251)', height: '5vh', borderBottom:'1px solid lightgray' }} >
        <Ship>Ships to:</Ship><Avatar alt="Cindy Baker" src={india} /><Country>India</Country>
        </Box>
        <Box sx={{ height: '10vh', borderBottom:'1px solid lightgray' , display:'flex' }} >
         <Logo src={logo} alt="logo" />
     
         <Input placeholder='Search' /> 
         <Button><Search src={search}></Search></Button>
        </Box>
        <Box sx={{ bgcolor: 'rgb(249,250,251)', height: '5vh' }} />
        </Container>
    </div>
  )
}

export default Navbar