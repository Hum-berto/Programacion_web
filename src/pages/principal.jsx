import React from "react";
import "../assets/stylesheets/Principal.css";
import Loyout1 from '../Containers/Loyout1'
import Footer from '../Componentes/Footer'

function principal({children}){
    return(
        <>
<Loyout1></Loyout1>
{children}


        </>
    )
}
export default principal;