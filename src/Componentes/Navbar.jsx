import '../assets/stylesheets/Nav.css';

import {  Link, Outlet } from "react-router-dom";

function Navbar(){

    return(
        <div>
       
        <nav className="navbar">
        <a  className="logo"></a>
          <div className="inner-width">
       
          <p class="subtitle is-6">#Chuwi</p>
             <br></br>
                     
              <button className="menu-toggler">
                 <span></span>
                 <span></span>
                 <span></span>
              </button>
 
              <div className="navbar-menu">     
              </div>
          </div>
<>
<br></br>
</>       
        </nav>   
        <Outlet />
     </div>
    )
}

export default Navbar;