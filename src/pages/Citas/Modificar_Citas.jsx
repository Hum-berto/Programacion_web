import React, {useState} from "react";
import "../../assets/stylesheets/Modificar_Mascotas.css";
import Add from "../../assets/img/Mascotas/Add_Petts.png"
import '../../assets/stylesheets/position.css'
import Navbar from "../../Componentes/Navbar";
import {Link} from "react-router-dom";

function Modificar_Citas (){

    const [citaId, setCitaId] = useState(0);
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
                "citaId":citaId,
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

    const modificar =async () => {
        const data = await fetch("http://localhost:8080/Cita/mod", peticion)
            .then(res => res.json)
            .then(res => {alert("Actualización Exitosa")})
            .then((data) => console.log(data))
            .catch((err) => console.error(err))
    }


    return(
        <div>
           <Navbar/>
           <br/>
           <br/>
           <div className="IDMascota mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Mascota</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setmascota(event.target.value)}} placeholder="mascota"/>

            </div>
            <div className="NombreDueño1 mb-3">
            <h1 className="h1 text-center title is-4">Modificar Cita</h1>
                <label htmlFor="exampleFormControlInput1" className="form-label">ID Citas</label>
                <input type="email" className="add_IDdueño form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setCitaId(event.target.value)}}  placeholder="Citas ID"/>
            </div>
            <div className="Direccion mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Fechas</label>
                <input type="email" className="add_IDmascota form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setFecha(event.target.value)}}  placeholder="2/1/2022"/>
            </div>
            <div className="NumTelefoico mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">ID Medicamento</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setMedicamentoid(event.target.value)}} placeholder="023123"/>
            </div>
            <div className="IDMascota mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Tipo de Servicio</label>
                <input type="email" className="add_Tipo form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setServicio(event.target.value)}} placeholder="Corta Uñas"/>
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
        
            
            <div className="IDdueño3 mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Motivo Cita</label>
                <input type="email" className="add_IDdueño form-control" id="exampleFormControlInput1"
                       onChange={(event) => {setMotivo(event.target.value)}} placeholder="lele pancha"/>

                <div className="Image">
                    <img className="Image1" src={Add} alt="a"/>
                </div>

                
                <button className="Enviar1 button is-success" onClick={modificar} type="button" id="button-addon1">Enviar</button>

            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
       <Link to="/"  className="button is-primary">Regresar</Link>
       <br></br>
</div>
     

        </div>
    )
}
export default Modificar_Citas;