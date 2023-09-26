import react from "react";

import { BiSolidStar } from "react-icons/bi";


function Main()
{
    return(
        <div>
            <div class="row4">
            <img style={{width:"100%",height:"100%"}} src={require("./images/img6.webp")}/>        
            </div>
            <div class="row4" ><br/><br/><br/><br/><br/><br/><br/>
                <center>
                    <div style={{color:"#D5BA09 ",fontSize:"2em"}}><span><BiSolidStar/></span>
                    <span><BiSolidStar/></span>
                    <span><BiSolidStar/></span>
                    <span><BiSolidStar/></span>
                    <span><BiSolidStar/></span></div>

                <h1 style={{letterSpacing:"6px",fontSize:"40px"}}><b>ANUSHREE GOENKA</b></h1>
                    
                    <p style={{color:"#5e6e88",fontSize:"15px",letterSpacing:"4px",fontFamily:"Arial Black"}}><b>CO-FOUNDER AND CEO AT<br/>SPARK STUDIO</b></p>
                    <p style={{fontSize:"25px",fontFamily:"Calibri Light"}}>I travel often for work and like to have things in<br/>
                    place. RASHIKI Fero helps me stay organized with its<br/>
                    practical design</p>
                    <br/><br/><br/><br/>
                    <br/>
                    <br/><br/><br/>
                    </center>
            
            </div>

            
        </div>
    );
}
export default Main;