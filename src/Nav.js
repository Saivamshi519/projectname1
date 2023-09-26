import React from "react";

import { MdOutlineVerifiedUser } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdCurrencyExchange } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";

function Nav()
{
    return(
        <div >
            
          
          <ul>
            <li><MdOutlineVerifiedUser/></li>
            <li><LiaShippingFastSolid/></li>
            <li><MdCurrencyExchange/></li>
            <li><FaExchangeAlt/></li>
          </ul>
          <center>
          6 Months warranty&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Free Shipping&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         Easy Exchanges & Returns&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Secure Checkout
          </center>
        

        </div>
    );
}
export default Nav;