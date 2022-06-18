import { useState } from "react";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import {
  Blue,
  Box,
  Button,
  Details,
  Favorite,
  Flex,
  Head,
  Heart,
  IconImage,
  Icons,
  MainCart,
  MidBox,
  Name,
  PARA,
  Red1,
  Red2,
  SelectBox,
  Slider,
  StarList,
  Stars,
  Stars1,
  Customer,
  Title,
  SliderImg,
  Progress
} from "./Details.styled";
import FullStar from "../../assests/FullStar.png";
import Star from "../../assests/star.png";
import "./Details.css";
import hearts from "../../assests/heartb.png";
import fb from '../../assests/facebook.png';
import insta from '../../assests/instagram.png';
import whats from '../../assests/whatsapp.png';
import pin from '../../assests/pinterest.png';
import twitter from '../../assests/twitter.png';
import {useNavigate,useParams} from 'react-router-dom';
import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";
import { getSingleAPI } from "../../Redux/Product/action";
import { Container, LinearProgress } from "@mui/material";
const Detail = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [quantity,setQuantity]=useState(1)
  const [count,setCount]=useState(1)
  const {id}=useParams();
  const {loading,error,singleproduct}=useSelector((store)=>store.product)
  const gotocheck=(id)=>{
    setCount(count+1)
   let d= localStorage.setItem("count",count) 
    navigate(`/details/${id}`)

  }
  useEffect(()=>{
    
    dispatch(getSingleAPI(id))
  
  },[dispatch])
 

  const handelquantity=(e)=>{
    setQuantity(e.target.value)
   }
  if(loading) return <h1>Loading.....</h1>
  if(error) return <h1>Error.......</h1>
  return (
    <Box>
    <MainCart>
      <Slider>
        <SliderImg src={singleproduct.image} alt="" />
      </Slider>
      <Details>
        <Name>{singleproduct.name}</Name>
        <Stars>
        <Stack spacing={1}>
      <Rating name="size-large" defaultValue={2} size="large" />
       </Stack>
        </Stars>
        <Blue>#2 of 107 in {singleproduct.features} Playhouses & Play...</Blue>
        <Red1>Sale INR {singleproduct.price*quantity}</Red1>
        <Red2>Sale Ends in: 1 day 23 hr</Red2>
        <Flex>
          <SelectBox onChange={handelquantity}>
            <option value={1}  className="opList">Quantity:1</option>
            <option value={2} className="opList">Quantity:2</option>
            <option value={3} className="opList">Quantity:3</option>
            <option value={4} className="opList">Quantity:4</option>
            <option value={5} className="opList">Quantity:5</option>
            <option value={6} className="opList">Quantity:6</option>
          </SelectBox>

          <Button onClick={()=>gotocheck(singleproduct._id)} >Add to Cart</Button>
        </Flex>

        <Flex>
          <div>
            <Heart src={hearts} />
          </div>
          <div>
            <Favorite>Favorites</Favorite>
          </div>
        </Flex>
      </Details>
    </MainCart>
        <Head>Share This Product :</Head>
      <MidBox>
        <Icons>
          <div>
            <IconImage src={pin} alt="" />
          </div>
          <div>
            <IconImage src={whats} alt="" />
          </div>
          <div>
            <IconImage src={twitter} alt="" />
          </div>
          <div>
            <IconImage src={insta} alt="" />
          </div>
          <div>
            <IconImage src={fb} alt="" />
          </div>
        </Icons>
      </MidBox>
       <PARA>Plastic stays, but the most beautiful and durable I'hv found'</PARA>
       <Stars1>
       <Stack spacing={1}>
      <Rating name="size-large" defaultValue={2} size="large" />
    </Stack>
        </Stars1>
        <Title>Customer Reviews</Title>
        <Customer>

        
           <label>Rating 1</label>
           <meter className="a" value="2" min='0' max='10' >2/10</meter><br />
           <label>Rating 2</label>
           <meter  className="a" value="0.6" id="disk">60</meter><br />

           <label>Rating 3</label>
           <meter  className="a" value="5" min='0' max='10' >2/10</meter><br />

           <label>Rating 4</label>
           <meter  className="a" value="1" id="disk">60</meter><br />
           <label>Rating 5</label>
           <meter  className="a" value="6" min='0' max='10' >2/10</meter><br />


           <label>Rating 6</label>
           <meter  className="a" value="4" id="disk">60</meter>

        </Customer>


      </Box>
  );
};

export default Detail;
