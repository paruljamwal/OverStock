import React from 'react'
import { CheckOutBox,UpImg1,Flex  ,Upbox,UpImg,Line} from './CheckOut.style'
import logo from '../../assests/download.png'
const CheckOut = () => {
  return (
    <CheckOutBox>
      <Upbox><UpImg src={logo} alt="" /></Upbox>
     <Line></Line>
      <Flex>
        <div><UpImg1 src="https://ak1.ostkcdn.com/img/mxc/20170922_fedexLogo.png" alt="" /></div>
        <div><p>Secure checkout provided by FedEx International.</p></div>
      </Flex>
      <div>
        <div>
          <h2>Billing Address</h2>
          Email <input type=""  />
          First Name <input type=""  />
          Last Name <input type=""  />
          Company <input type=""  />
          Tax ID <input type=""  />
          Address Line 1 <input type=""  />
          Address Line 2 <input type=""  />
          Country <input type=""  />
          City <input type=""  />
          State <input type=""  />
          Zip Code <input type=""  />
        </div>
        <div>
          <h2>Shipping Address</h2>
          Email <input type=""  />
          First Name <input type=""  />
          Last Name <input type=""  />
          Company <input type=""  />
          Tax ID <input type=""  />
          Address Line 1 <input type=""  />
          Address Line 2 <input type=""  />
          Country <input type=""  />
          City <input type=""  />
          State <input type=""  />
          Zip Code <input type=""  />
          Phone# <input type=""  />
        

        </div>
      </div>

      <div>
        <h2>Shipping method</h2>
        <div>
          <input type="radio" /> <p>International Standard- 32268.43 INR</p>
                                  <p>Estimated Delivery Date 2022-07-05</p>
             <input type="radio" /><p>International Standard- 32268.43 INR</p>
                                  <p>Estimated Delivery Date 2022-07-05</p>
         </div>
      </div>

      <div>
        <h2>Confirm Orader</h2>
        <table>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>

      <div>
        <h2>Payment Information</h2>
        <div>
          Carf Type* <select>
            <option value="">Visa card</option>
            <option value="">Master Card</option>
            <option value="">bitcoin</option>
          </select>
          Credit Card Number* <input type="text" />
          Expiration Data* <input type="text" /><input/>
            Security Code* <input type="Password" />
        </div>
      </div>
       
    </CheckOutBox>
  )
}

export default CheckOut