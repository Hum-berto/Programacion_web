import Header from "../Componentes/Header"
import Section from "../Componentes/Section"



function Loyout({children}){


    return(

        <>

        <Header></Header>
        {children}
       <Section></Section>
        </>

    )
}

export default Loyout;