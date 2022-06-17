import React from 'react'
import {Lower1,Lower2, Footer1,Head, Para,FooterLower,Footerup ,Flex,Grid} from './Footer.style'
const Footer = () => {
  return (
    <Footer1>
      <Footerup>
        <Flex>
          <Grid>
            <div>
              <Head>MY ACCOUNT</Head>
              <Para>Orders & Returns</Para>
              <Para>Email preferences</Para>
              <Para>Account Settings</Para>
             </div>
          </Grid>
          <Grid>
            <Head>LET US HELP</Head>
            <Para>Contact Customer Care</Para>
            <Para>Return policy</Para>
            <Para>International Help</Para>
            <Para>Accessibility</Para>
          </Grid>
          <Grid>
            <Head>COMPANY INFORMATION</Head>
            <Para>About Overstock</Para>
            <Para>Contact Us</Para>
            <Para>Careers</Para>
            <Para>Investor products</Para>
            <Para>Supply Chain Transparency</Para>
          </Grid>
          <Grid>
            <Head>MORE WAYS TO SHOP</Head>
            <Para>Tips & Ideas</Para>
            <Para>Deals</Para>
            <Para>Clearance</Para>
            <Para>Nea Arrivals</Para>
          </Grid>
        </Flex>
      </Footerup>
      <FooterLower>
       <Lower1>
          <p>Copyright 2022, Overstock.com@,Inc.</p>
          <p>799 Colliseum Way Midvate,UT 84047 | 1-800-843-2446</p>
        </Lower1>
        <Lower2>
           <span>Terms & Conditions    *Promotion Terms    Ship to: <img src="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif" alt="" /></span>
        </Lower2>
      </FooterLower>

    </Footer1>
  )
}

export default Footer