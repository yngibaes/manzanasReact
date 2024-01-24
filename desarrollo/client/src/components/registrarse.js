import React, { useState } from "react";
import axios from 'axios';


/* import { useNavigate } from "react-router-dom"; */
function Form(){
    const [values, setValues] = useState({
        idDoc_mujer: '',
        tpDoc_mujer: '',
        nom_mujer: '',
        apell_mujer: '', 
        tel_mujer: '',
        email_mujer: '',
        passw_mujer: '',
        ciu_mujer: '',
        dir_mujer: '',
        ocu_mujer: ''
    })
    /* const navigate = useNavigate(); */
    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:4000/registrarse/ola', values)
        .then(res => {console.log(res);
                /* navigate('/iniciarsesion')
             if(res.data.status === 'Success'){
                navigate('/iniciarsesion')
             */})
        .catch(err => {console.log(err);})}

    return(
        <form onSubmit={handleSubmit}>

            <div className="inputBox">
                <label htmlFor="idDoc_mujer">Número de identificación: </label>
                <input type="number" placeholder="Digite su número de identificación" /* name="idDoc_mujer" id="idDoc_mujer"  */className="inputArea" required onChange={e => setValues ({...values, idDoc_mujer: e.target.value})}/>
            </div>

            <div className="inputBox">
                <label>Seleccione su tipo de identificación</label>
                <select onChange={e => setValues ({...values, tpDoc_mujer: e.target.value})}>
                    <option >Cédula ciudadana</option>
                    <option>Cédula extranjería</option>
                    <option>Tarjeta de Identidad</option>
                </select>
            </div>

            <div className="inputBox">
                <label htmlFor="nom_mujer">Nombres: </label>
                <input type="text" placeholder="Digite su nombre" name="nom_mujer" id="nom_mujer" className="inputArea" required onChange={e => setValues ({...values, nom_mujer: e.target.value})}/>
            </div>

            <div className="inputBox">
                <label htmlFor="apell_mujer">Apellidos: </label>
                <input type="text" placeholder="Digite su apellido" name="apell_mujer" id="apell_mujer" className="inputArea" required onChange={e => setValues ({...values, apell_mujer: e.target.value})}/>
            </div>

            <div className="inputBox">
                <label htmlFor="tel_mujer">Télefono: </label>
                <input type="text" placeholder="Digite su télefono" name="tel_mujer" id="tel_mujer" className="inputArea" required onChange={e => setValues ({...values, tel_mujer: e.target.value})}/>
            </div>

            <div className="inputBox">
                <label htmlFor="email_mujer">Email: </label>
                <input type="email" placeholder="Digite su nombre:" name="email_mujer" id="email_mujer" className="inputArea" required onChange={e => setValues ({...values, email_mujer: e.target.value})}/>
            </div>

            <div className="inputBox">
                <label htmlFor="passw_mujer">Contraseña: </label>
                <input type="password" placeholder="Digite su contraseña" name="passw_mujer" id="passw_mujer" className="inputArea" required onChange={e => setValues ({...values, passw_mujer: e.target.value})}/>
            </div>

            <div className="inputBox">
                <label htmlFor="ciu_mujer">Ciudad: </label>
                <input type="text" placeholder="Digite su apellido" name="ciu_mujer" id="ciu_mujer" className="inputArea" required onChange={e => setValues ({...values, ciu_mujer: e.target.value})}/>
            </div>

            <div className="inputBox">
                <label htmlFor="dir_mujer">Dirección: </label>
                <input type="text" placeholder="Digite su dirección" name="dir_mujer" id="dir_mujer" className="inputArea" required onChange={e => setValues ({...values, dir_mujer: e.target.value})}/>
            </div>

            <div className="inputBox">
                <label htmlFor="ocu_mujer">Ocupación: </label>
                <input type="text" placeholder="Digite su ocupación" name="ocu_mujer" id="ocu_mujer" className="inputArea" required onChange={e => setValues ({...values, ocu_mujer: e.target.value})}/>
            </div>

            <div className="enterBtn">
                <button type="submit">Enviar</button>
            </div>      
        </form>
    )
}
export default Form