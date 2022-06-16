import React from 'react'
import {Flex,Login,INPUT, HEAD, Label, Main, SignBox,Signed,Continue, TopBar,Input,Create } from './Sign.style'
// import { HEAD, Main, SignBox } from './Sign.style'

const Sign = () => {
  return (

    <Main>
        <TopBar>
          <div>StockOver</div>
          <div><p>you are using our secure server</p></div>
          </TopBar> 
        <hr />
        <SignBox>
            <Signed>
                <HEAD>Create Account</HEAD>
                 <Label>Email Address*</Label><br />
                 <Input type="email" placeholder='Email' /><br />
                  <Flex>
                  <div>

                    <Label>Create Password*</Label><br />
                    <INPUT type="password" placeholder="Password" />
                
                    </div>
                    <div>
                    <Label>Confirm Password*</Label><br />
                    <INPUT type="password" placeholder='Confirm Password' /><br />

                    </div>
                    </Flex>
                    <input type="checkbox" /><br />
                    
                   
                     <Create>Create Account</Create><br />
                     <Continue>Continue as Guest</Continue> 
             <p>By creating an account or continuing as a Guest, you agree to our Terms & Conditions and Privacy Policy.</p>

             <p>Terms & Conditions | Privacy Policy.

**You can unsubscribe at any time</p>
             </Signed>
            <Signed>
            <HEAD>Sign In</HEAD>

            <Label>Email Address*</Label><br />
            <Input type="email" placeholder='Email' /><br />
            <Label>Password*</Label><br />
            <Input type="Password" placeholder='Password' />
             <Login>Sign In</Login>
             <p>Forget your password</p>
            </Signed>
        </SignBox>
    </Main>
  )
}

export default Sign