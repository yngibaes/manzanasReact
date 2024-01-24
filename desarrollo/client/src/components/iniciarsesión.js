import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Iniciarsesion() {
  const [values, setValues] = useState({
    idDoc_mujer: '',
    passw_mujer: ''
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/iniciarsesion", values)
      .then((res) => {
        if(values.idDoc_mujer=="1033696505" || values.idDoc_mujer=="1012916341"){
          alert("Iniciaste sesión")
        navigate("/admin");
        }else{
          console.log(values)
        alert("Credenciales no encontradas")
        navigate("/");}
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1 class="container d-flex justify-content-center my-4">
    Conectate con las Manzanas
</h1>

<div class="container">

<div class="container bg-light p-3 rounded-4 border border-secondary d-flex justify-content-center">
        <form class="row g-3" onSubmit={handleSubmit}>
        <div class="col-md-12">
            <label for="inputEmail4" class="form-label">Numero de Documento</label>
            <input type="number" class="form-control" id="inputCedula" onChange={(e) =>
                setValues({ ...values, idDoc_mujer: e.target.value })}/>
        </div>
        <div class="col-md-12">
            <label for="inputPassword4" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="inputPassword" onChange={(e) =>
                setValues({ ...values, passw_mujer: e.target.value })}/>
        </div>
        <div class="col-12">
            <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
        </div>
        </form>
    </div>

</div>
    </div>
  )
}

export default Iniciarsesion
