import "./style.css";
import Navbar from "./Navbar";
import Section from "./Section";
import Main from "./Main";
import Article from "./Article";
import Nav from "./Nav";
import Aside from "./Aside";





function App() {
  return (
    <div className="App">
      
      <div style={{backgroundColor:"black",color:"white",padding:"1px"}}>
      <center><p>EASY RETURNS AND EXCHANGES | FREE SHIPPING</p></center>
      </div>
      
      <Navbar/>
     
     
      <div >
        <img style={{width: "100%",height: "50%"}} src={require("./images/img1.webp")}/> 
              
      </div>

{/* */}        
      <div style={{fontSize:"25px",color:"#5e6e88", padding:"3em"}}>
      <center><b>HERE'S WHATS HAPPENING</b></center>
        </div>

        <div>
          <img style={{width:"100%"}} src={require("./images/img2.webp")}/>
          </div>     

{/* */}          
          <div style={{fontSize:"25px",color:"#5e6e88", padding:"2em"}}>
      <center><b>SHOP OUR FAVOURITES</b></center>
        </div>

        <Section/>
        <br/>
        

        <Main/>

{/* */}  
        <div style={{fontSize:"25px",color:"#5e6e88", padding:"3em"}}>
      <center><b>WE HAVE SOME NEWS!</b></center>
        </div>

        <Article/>
        <br/><br/><br/><br/>

      
             
{/* */} 
        <div style={{fontSize:"25px",color:"#5e6e88", padding:"3em"}}>
      <center><b>DELIVERING MORE</b></center>
        </div>
        
      <Nav/>
      <br/><br/>

      <Aside/> 

       
       <br/><br/>

       <div class="row6">

       <strong><h3><b>CUSTOMER SERVICE</b></h3></strong>
        Shipping & Delivery Policy<br/>
          Return , Exchange and Refunds policy<br/>
           Privacy Policy<br/>
           Color Variation and Wear Tear<br/>
           Terms of Service<br/>
              Intellectual Property & Trademarks<br/>
               Contact Us<br/>
        
       </div>
       <br/>
       <br/>
       <br/>
       <br/>
       

       <div>
        <div class="row9">&copy;&nbsp; R&nbsp;A&nbsp;S&nbsp;H&nbsp;K&nbsp;I <br/><br/>Design by Marstechs</div><br/>
        <div class="row9"></div>
        <div class="row9">
        <img style={{width: "10%",height: "10%"}} src={require("./images/img26.webp")}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img style={{width: "10%",height: "10%"}} src={require("./images/img27.webp")}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img style={{width: "12%",height: "10%"}} src={require("./images/img28.webp")}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img style={{width: "12%",height: "20%"}} src={require("./images/img29.webp")}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img style={{width: "13%",height: "10%"}} src={require("./images/img30.webp")}/> 
        </div>        
       </div>
       

      

       </div>
  );
}

export default App;
