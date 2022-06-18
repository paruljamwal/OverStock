import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate,useParams} from "react-router-dom"
import { getSingleAPI } from "../../Redux/Product/action";
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
  const navigate=useNavigate()
  const {id}=useParams()
  const dispatch=useDispatch()
  const {loading,error,singleproduct}=useSelector((store)=>store.product)
  useEffect(()=>{
    dispatch(getSingleAPI(id))
  },[])

  // console.log(singleproduct)

  const gotocheck=()=>{
    navigate("/sign")
  }
  if(loading) return <h1>Loading.....</h1>
  if(error) return <h1>Error.......</h1>
  return (
    <>
      <Maincard1>
        <Head1>Shoping Cart</Head1>
        <CartBox>
          <LeftCard>
            <MidCard>
              <ImgDiv>
               <IMAGE src={singleproduct.image} />
              </ImgDiv>
              <ProductD>
                <Para1>{singleproduct.name}</Para1>
                <Para2>{singleproduct.color}-Toddler</Para2>
                <Under>INR3,{singleproduct.price}</Under>
                <RED1>Sale INR {singleproduct.price}</RED1>
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

            <Checkout onClick={()=>gotocheck(singleproduct._id)}>Check Out</Checkout>
            </CartDiv>
          </RightCard>
        </CartBox>
      </Maincard1>
    </>
  );
};

export default Cart;
