import { Box } from "@mui/system";
// import Button from "@mui/material/Button";
import axios from "axios"
import React, { useContext } from "react";
import india from "../../assests/india.png";
import logo from "../../assests/download.png";
import search1 from "../../assests/search.png";
import cart from '../../assests/cart.png'
import user from '../../assests/user.png'
import heart from '../../assests/heartb.png'
import { Link } from "react-router-dom";
import "./Navbar.css";
import Search2 from "./Search";
import {useNavigate} from 'react-router-dom';
import {
  Country,
  Logo,
  Search,
  Ship,
  Smallnav,
  Inputbar,
  Container,
  SearchBttn,
  India,
  RightBox,
  Btn,
  Img,
  Div,
  Name
} from "./Navbar.styled";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import searchItems from './utils/db'
const Navbar = () => {
  const navigate=useNavigate()
  const [count,setCount]=useState()
  const {isAuth,logout}=useContext(AuthContext)
  const [query,setQuery]=useState("");//for searching
  const [loading,setLoading]=useState(false); //for loading
  const [suggestion,setSuggestion]=useState([]) // our data in arry of obj format
  


  const checkout=()=>{
    navigate('/checkout')
   
  }
  
  useEffect(()=>{
   setCount(localStorage.getItem("count"))
   },[count])

   const handelClick=()=>{
   if(isAuth){
    logout()
    navigate("/")
   }else{
    navigate("/sign")
   }
   }
//  console.log(searchItems)
    //search bar login 

    useEffect(()=>{
      if(query===""){
        setSuggestion([])
      }
      else{   
        // comparing 2 strings if not match return -1 countering === whatever enter in input box...
        let newList=searchItems.filter(e=>e.name.toLowerCase().indexOf(query) !==-1? true : false
        ).map((e)=>e.name)
        setSuggestion(newList)
        
      }
      //make loading false when delete the list
      setTimeout(()=>setLoading(false),1000);
    },[query]);


  return (
    <div>
      <Container>
        <Box
          sx={{
            bgcolor: "rgb(249,250,251)",
            height: "5vh",
            borderBottom: "1px solid lightgray",
          }}
        >
          <Ship>Ships to:</Ship>
          <Link to="/">
            <India alt="Cindy Baker" src={india} />
          </Link>
          <Country>India</Country>
        </Box>
        <Box
          sx={{
            height: "10vh",
            borderBottom: "1px solid lightgray",
            bgcolor: "rgb(249,250,251)",
            display: "flex",
          }}
        >
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <Search2  onChange={(val)=>setQuery(val)} loading={loading} setLoading={setLoading} suggestion={suggestion} />
          {/* <Inputbar placeholder="Search" /> */}
          <SearchBttn>
            <Search src={search1}></Search>
          </SearchBttn>
           <RightBox> 
             <Div>
              <div> <Link to='/sign' > <Img src={user}/> </Link></div>
              <div> <Name onClick={handelClick}>{isAuth ?"Logout":"Login"}</Name> </div>
             </Div>
             <Div>
              <div><Link to='/like'> <Img src={heart} /> </Link></div>
              <div> <Name>List</Name> </div>
             </Div>
             <Div>
              <div><Link to='/cart'> <Img src={cart} /><span style={{color:"teal", position:"absolute"}} >{count}</span></Link> </div>
              <div> <Name>Cart</Name> </div>
             </Div>
             <Btn onClick={()=>checkout()} >Checkout</Btn>
           </RightBox>
        </Box>

        <Box
          sx={{ bgcolor: "rgb(249,250,251)", height: "5vh", display: "flex" }}
        >
          <Smallnav>
            <Link className="link" to="/kids">
              Kids & Baby
            </Link>
          </Smallnav>
          <Smallnav>
            <Link className="link" to="/furniture">
              Furniture
            </Link>
          </Smallnav>
          <Smallnav>
            <Link className="link" to="/rugs">
              Rugs
            </Link>
          </Smallnav>
          <Smallnav>
            <Link className="link" to="/decor">
              Decor
            </Link>
          </Smallnav>
          <Smallnav>
            <Link className="link" to="/bedding">
              Bedding
            </Link>
          </Smallnav>
          <Smallnav>
            <Link className="link" to="/homeimprove">
              HomeImprovement
            </Link>
          </Smallnav>
          <Smallnav>
            <Link className="link" to="/kitchen">
              Kitchen
            </Link>
          </Smallnav>
          <Smallnav>
            <Link className="link" to="/outdoor">
              Outdoor
            </Link>
          </Smallnav>

          <Smallnav>
            <Link className="link" to="/lightning">
              Lighting
            </Link>
          </Smallnav>
          <Smallnav>
            <Link className="link" to="/more">
              More
            </Link>
          </Smallnav>
          <Smallnav>
            <Link className="link" to="/idea">
              Ideas
            </Link>
          </Smallnav>
          <Smallnav>
            <Link
              style={{ color: "rgb(255,31,44)" }}
              className="link"
              to="/sales"
            >
              Sales & Deals
            </Link>
          </Smallnav>
        </Box>
      </Container>
    </div>
  );
};

export default Navbar;
