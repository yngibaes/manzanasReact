import React, { useState } from 'react'
import axios from 'axios';

function Generar(props) {
  const handleDownload = () => {
    // Llama a la API para descargar un archivo Excel
    axios.get('http://localhost:4000/admin/reportes')
      .then((res) => res.json())
      /* .then((data) => {
        // Actualiza el estado con los datos devueltos por la API
        setData(data);
      }); */
  };
  return (
    <div>
        <div className='row'>
            <div className="card mx-5 my-5" style={{width: "18rem"}}>
                <img src={props.img} className="card-img-top col" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <button onClick={handleDownload} className="btn btn-primary">Ir a la página</button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Generar