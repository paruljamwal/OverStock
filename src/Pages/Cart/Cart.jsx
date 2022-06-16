import React from "react";
import {
  CartBox,
  Head1,
  ImgDiv,
  LeftCard,
  Maincard1,
  MidCard,
  ProductD,
  RED1,
  RED2,
  RightCard,
  SelectBox1,
  Para1,
  Para2,
  Under,
  Lowlink,
  Linkdiv,
  IMAGE,
  CartDiv,
  Para3,
  Box1,
  Checkout,
  Big,
  Gray
} from "./Cart.Style";

const Cart = () => {
  return (
    <>
      <Maincard1>
        <Head1>Shoping Cart</Head1>
        <CartBox>
          <LeftCard>
            <MidCard>
              <ImgDiv>
               <IMAGE src='https://ak1.ostkcdn.com/images/products/is/images/direct/3828c3f21f440fb80cf3a0e0f32197060da5ba8c/Princess-Castle-Play-House-Large-Outdoor-Kids-Play-Tent-for-Girls-Pink--Blue.jpg?imwidth=480&impolicy=medium' />
              </ImgDiv>
              <ProductD>
                <Para1>Princess Castke LED Pink Play Tent</Para1>
                <Para2>Pink-Toddler</Para2>
                <Under>INR3,242.323</Under>
                <RED1>Sale INR 2,674.21</RED1>
                <RED2>15% Savings</RED2>
                <RED2>Ends in 1 day 18 hrs 45 min</RED2>
                <SelectBox1>
                  <option className="opList">1</option>
                  <option className="opList">None 0</option>
                  <option className="opList">2</option>
                  <option className="opList">3</option>
                  <option className="opList">4</option>
                  <option className="opList">5</option>
                  <option className="opList">6</option>
                </SelectBox1>
                <Lowlink>
                    <Linkdiv>Remove</Linkdiv>
                    <Linkdiv>Save For Later</Linkdiv>
                </Lowlink>
              </ProductD>
            </MidCard>
          </LeftCard>
          <RightCard>
           
           <CartDiv>
            <Para3><Gray>You saved</Gray> $43.45 <Gray> on this order</Gray></Para3>
           <Box1>
            <div>(1) Items:</div>
            <div>INR 20,992</div>
           </Box1>
            
            <Box1>
                <Gray>Sale Savings:</Gray>
                <RED2>-INR 3883.51</RED2>
            </Box1>

            <Box1>
                <div>Subtotal:</div>
                <div>INR 17,108.89</div>
            </Box1>
            <hr></hr>
            <Box1>
                <Big>Your Total:</Big>
                <Big>INR 17,108.89</Big>
            </Box1>

            <Checkout>Check Out</Checkout>
            </CartDiv>
          </RightCard>
        </CartBox>
      </Maincard1>
    </>
  );
};

export default Cart;
