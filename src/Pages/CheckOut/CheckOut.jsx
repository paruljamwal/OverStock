import React from 'react'
import {Inputradio,RadionBox,TextBox,Logoimg,Input1,Input2, CheckOutBox,UpImg1,Flex,Head,Method ,Label ,Green,Upbox,UpImg,Line,Inbox,BoxFlex,MainBill,BillBox,ShipBox,Input} from './CheckOut.style'
import logo from '../../assests/download.png'
import './CheckOut.css'
const CheckOut = () => {
  return (
    <CheckOutBox>
      <Upbox><UpImg src={logo} alt="" /></Upbox>
     <Line></Line>
      <Flex>
        <div><UpImg1 src="https://ak1.ostkcdn.com/img/mxc/20170922_fedexLogo.png" alt="" /></div>
        <div><p>Secure checkout provided by FedEx International.</p></div>
      </Flex>
      <MainBill>
        <BillBox>
          <Head>Billing Address</Head>
      
         <BoxFlex><Label>Email</Label> <Inbox> <Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label> First Name</Label> <Inbox><Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label> Last Name </Label><Inbox><Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label> Company </Label><Inbox><Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label> Tax ID </Label><Inbox><Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label> Address 1</Label> <Inbox><Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label>Address 2 </Label> <Inbox><Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label> Country</Label> <Inbox><Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label>City</Label>  <Inbox><Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label> State</Label><Inbox> <Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label>Zip Code </Label> <Inbox><Input type=""  /></Inbox></BoxFlex>
        </BillBox>
        <ShipBox>
          <Head>Shipping Address</Head>
         <BoxFlex><Label> Email</Label><Inbox> <Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label>First Name </Label> <Inbox><Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label>Last Name </Label> <Inbox><Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label> Company</Label><Inbox> <Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label>Tax ID</Label> <Inbox> <Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label> Address 1</Label> <Inbox><Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label> Address 2 </Label><Inbox><Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label>Country</Label> <Inbox> <Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label> City </Label><Inbox><Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label>State</Label> <Inbox> <Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label>Zip Code</Label> <Inbox> <Input type=""  /></Inbox></BoxFlex>
         <BoxFlex><Label>Phone#</Label> <Inbox> <Input type=""  /></Inbox></BoxFlex>
        

        </ShipBox>
      </MainBill>

      <div>
        <Head>Shipping method</Head>
        <Method>
          <RadionBox>
          <Inputradio type="radio" /> 
          </RadionBox>
          <TextBox>
          <p>International Standard- 32268.43 INR</p><br />
           <Green>Estimated Delivery Date 2022-07-05</Green>  
           </TextBox>
           </Method>

           <Method>
           <RadionBox>
             <Inputradio type="radio" />
             </RadionBox>
             <TextBox>
             <p>International Standard- 32268.43 INR</p>
             <Green>Estimated Delivery Date 2022-07-05</Green>
             </TextBox>
             </Method>
      </div>

      <div>
        <Head>Confirm Order</Head>
        <table border="0px">
         <td className='data'>
            <tr>Subtotal:</tr>
             <tr>Shipping:</tr>
             <tr>Duty and Tax:</tr>
             <tr>Loss and Damage Protection remove</tr>
              <tr>Order Total:</tr>
              </td>
              <td >
                <tr>123846.70 INR</tr>
                <tr>553823.68 INR</tr>
                <tr>123846.70 INR</tr>
                <tr>123846.70 INR</tr>
                <tr>123846.70 INR</tr>
              </td>
          
        </table>
      </div>

      <div>
        <Head>Payment Information</Head>

        <Logoimg>
          <div>
            <img src="https://ztransaction.bongous.com/static/css/images/pm/visa.png" alt="" />
           </div>
          <div>
            <img src="https://ztransaction.bongous.com/static/css/images/pm/mastercard.png" alt="" />
          </div>
          <div>
            <img src="https://ztransaction.bongous.com/static/css/images/pm/bitcoin.png" alt="" />
          </div>
        </Logoimg>
        <div>
        <BoxFlex> <Label>Carf Type* </Label> 
          
          <select>
            <option value="">Visa card</option>
            <option value="">Master Card</option>
            <option value="">bitcoin</option>
          </select></BoxFlex>
        <BoxFlex><Label> Credit Card Number*</Label><Inbox> <Input1 type="text" /></Inbox></BoxFlex> 
        <BoxFlex> <Label> Expiration Data*</Label><Inbox> <Input2 type="text" /><Input2 type="text" /></Inbox></BoxFlex>
        <BoxFlex> <Label>   Security Code*</Label><Inbox> <Input1 type="Password" /></Inbox></BoxFlex>
        </div>
      </div>
       
    </CheckOutBox>
  )
}

export default CheckOut