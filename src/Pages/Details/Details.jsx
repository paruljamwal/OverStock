import React from "react";
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
  SliderImg
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
import {useNavigate} from 'react-router-dom';
const Detail = () => {
  const navigate=useNavigate()
  const gotocheck=()=>{
    navigate('/cart')
  }
  return (
    <Box>
    <MainCart>
      <Slider>
        <SliderImg src="https://ak1.ostkcdn.com/images/products/30567641/Princess-Castle-Play-Tent-for-Girls-with-LED-Star-String-Lights-Pink-1-64bbd6ad-b354-4f15-aaca-a9aae63a0b30_600.jpg" alt="" />
      </Slider>
      <Details>
        <Name>Princess Castle LED Pink Play Tent</Name>
        <Stars>
          <div>
            <StarList src={FullStar} />
          </div>
          <div>
            <StarList src={FullStar} />
          </div>
          <div>
            <StarList src={FullStar} />
          </div>
          <div>
            <StarList src={Star} />
          </div>
          <div>
            <StarList src={Star} />
          </div>
        </Stars>
        <Blue>#2 of 107 in Outdoor Playhouses & Play...</Blue>
        <Red1>Sale INR 2671 77</Red1>
        <Red2>Sale Ends in: 1 day 23 hr</Red2>
        <Flex>
          <SelectBox>
            <option className="opList">Quantity:1</option>
            <option className="opList">Quantity:2</option>
            <option className="opList">Quantity:3</option>
            <option className="opList">Quantity:4</option>
            <option className="opList">Quantity:5</option>
            <option className="opList">Quantity:6</option>
          </SelectBox>

          <Button onClick={()=>gotocheck()} >Add to Cart</Button>
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
          <div>
            <StarList src={FullStar} />
          </div>
          <div>
            <StarList src={FullStar} />
          </div>
          <div>
            <StarList src={FullStar} />
          </div>
          <div>
            <StarList src={Star} />
          </div>
          <div>
            <StarList src={Star} />
          </div>
        </Stars1>
        <Title>Customer Reviews</Title>
        <Customer>
           <label>Reviews</label>
           <meter value="2" min='0' max='10' >2/10</meter>
           <label>Reviews</label>
           <meter value="0.6" id="disk">60</meter>
        </Customer>


      </Box>
  );
};

export default Detail;
