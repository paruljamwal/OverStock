import React from "react";
import {
  Flex,
  Login,
  INPUT,
  Signed1,
  Para,
  HEAD,
  Hori,
  Label,
  Label1,
  Main,
  SignBox,
  Signed,
  Continue,
  TopBar,
  Input,
  Create,
} from "./Sign.style";
import {useNavigate} from 'react-router-dom'
// import { HEAD, Main, SignBox } from './Sign.style'

const Sign = () => {
  const navigate=useNavigate()
  const gotocheck=()=>{
    navigate('/checkout')
  }
  return (
    <Main>
      <TopBar>
        <div>StockOver</div>
        <div>
          <p>you are using our secure server</p>
        </div>
      </TopBar>
      <hr />
      <SignBox>
        <Signed>
          <HEAD>Create Account</HEAD>
          <Label>Email Address*</Label>
          <br />
          <Input type="email" placeholder="Email" />
          <br />
          <Flex>
            <div>
              <Label1>Create Password*</Label1>
              <br />
              <INPUT type="password" placeholder="Password" />
            </div>
            <div>
              <Label1>Confirm Password*</Label1>
              <br />
              <INPUT type="password" placeholder="Confirm Password" />
              <br />
            </div>
          </Flex>

          <Flex>
            <div>
              <input type="checkbox" />
              <br />
            </div>
            <div>
              <Para>
                Sign up today for exclusive offers from Overstock.com delivered
                right to your inbox**
              </Para>
            </div>
          </Flex>

          <Create>Create Account</Create>
          <br />
          <Hori />
          <Continue>Continue as Guest</Continue>
        </Signed>
        <Signed1></Signed1>
        <Signed>
          <HEAD>Sign In</HEAD>

          <Label>Email Address*</Label>
          <br />
          <Input type="email" placeholder="Email" />
          <br />
          <Label>Password*</Label>
          <br />
          <Input type="Password" placeholder="Password" />
          <Login onClick={()=>gotocheck()} >Sign In</Login>
          <p style={{ margin: "20px 0px 0px 70px" }}>Forget your password</p>
        </Signed>
      </SignBox>
    </Main>
  );
};

export default Sign;
