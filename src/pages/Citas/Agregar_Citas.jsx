import React, {useState} from "react";
import "../../assets/stylesheets/Agregar_Mascota.css";
import Add from "../../assets/img/Mascotas/Add_Petts.png"
import {  Link, Outlet } from "react-router-dom";
import Navbar from "../../Componentes/Navbar";



function Agregar_Citas (){

    const [medicamentoId, setMedicamentoid] = useState(0);
    const [motivo, setMotivo] = useState('');
    const [servicio, setServicio] = useState('');
    const [fecha, setFecha] = useState('');
    const [nombredeldueno,setnombredeldueno] = useState('');
    const [telefono,settelefono] = useState('');
    const [mascota,setmascota] = useState('');

    const peticion = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(

            {
                "servicio": servicio,
                "fecha": fecha,
                "motivo": motivo,
                "medicamentoId": medicamentoId,
                "nombredeldueno":nombredeldueno,
                "telefono":telefono,
                "mascota":mascota
            }

        )
    }

    const agregar =async () => {
        const data = await fetch("http://localhost:8080/Cita/add", peticion)
            .then(res => res.json)
            .then(res => {alert("Registro Exitoso")})
            .then((data) => console.log(data))
            .catch((err) => console.error(err))
    }


    return(
        <div>
           <Navbar/>
           <br/>
           <br/>
           <br/>
           <div className="NombreDueño1 mb-3">
                <h1 className="title is-4">Agregar Cita</h1>
               
                <br></br>
          
                <label htmlFor="exampleFormControlInput1" className="form-label">Fecha</label>
                <input type="email" className="add_IDdueño form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setFecha(event.target.value)}} placeholder="1/1/2022"/>
            </div>

            
            <div className="Direccion mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">ID Medicamento</label>
                <input type="email" className="add_IDmascota form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setMedicamentoid(event.target.value)}} placeholder="Medicamento"/>
            </div>
            <div className="NumTelefoico mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Tipo de Servicio</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setServicio(event.target.value)}}  placeholder="Servicio"/>
            </div>
            <div className="IDMascota mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Nombre del Dueño</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setnombredeldueno(event.target.value)}} placeholder="Dueño"/>

            </div>
            <div className="IDMascota mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Telefono</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {settelefono(event.target.value)}} placeholder="telefono"/>

            </div>
            <div className="IDMascota mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Mascota</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setmascota(event.target.value)}} placeholder="mascota"/>

            </div>
            <div className="IDMascota mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Motivo de Cita</label>
                <input type="email" className="add_IDueño form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setMotivo(event.target.value)}} placeholder="Motivo"/>

            </div>
            <div className="IDdueño3 mb-3">
                <div className="Image">
                <img className="Image1" src={Add} alt="a"/>
            </div>
                <button className="Enviar1 button is-info" onClick={agregar} type="button" id="button-addon1">Enviar</button>

            </div> 
            <div class="d-grid gap-2 col-6 mx-auto">
       <Link to="/"  className="button is-primary">Regresar</Link>
</div>
     
            <br/>
            

        </div>
    )
}
    export default Agregar_Citas;