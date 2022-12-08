import {  Outlet, Link } from "react-router-dom";
import '../assets/stylesheets/header.css'
import '../assets/stylesheets/Nav.css'


function Header(){

return(

    
    <div>
      
       <nav className="navbar">
       <a  className="logo"></a>
         <div className="inner-width">
          
           
            <br></br>
            <p class="subtitle is-6">#Chuwi</p>
            
           
            
             <button className="menu-toggler">
                <span></span>
                <span></span>
                <span></span>
             </button>

             <div className="navbar-menu">
          
              
             </div>
             
         </div>
       
       </nav>
       <Outlet />
     

    </div>
    

)

}

export default Header;