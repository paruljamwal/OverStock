import React from 'react'
import { Blue, Details, MainCart, Name, Red1, Red2, Slider, Stars } from './Cart.styled'

const Cart = () => {
  return (
    <MainCart>
      <Slider></Slider>
      <Details>
         <Name>Princess Castle LED Pink Play Tent</Name>
         <Stars>*******</Stars>
         <Blue>#2 of 107 in Outdoor Playhouses & Play...</Blue>
         <Red1>Sale INR 2671 77</Red1>
         <Red2>Sale Ends in: 1 day 23 hr</Red2>
    
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
 
      </Details>
    </MainCart>
  )
}

export default Cart