import react from "react";

import { FaBars } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";



function Navbar()
{
   
    return(
        
        <div class="row1">
            <div class="row2"><FaBars/></div>
            <div class="row2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img style={{width: "35%",height: "20%"}} src={require("./images/img31.webp")}/> &nbsp;&nbsp;&nbsp;<b></b></div>
            <div class="row2">
                <div class="row3">
                <select style={{border:"0",size:"4",letterSpacing:"3px",fontFamily:"aerial"}}>
                    <option>
                        INDIA(INR &#8377;)
                    </option>
                </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <CgProfile/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BiSearch/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaShoppingCart/></div>
                </div>
        </div>
        
    );
}
export default Navbar;