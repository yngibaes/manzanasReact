import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Propuesta() {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:4000/admin/manzanas")
        .then((res) => {setData(res.data)})
        .catch((err) => console.log(err));
    });
    useEffect(() => {
        axios.get("http://localhost:4000/admin/servicios")
          .then((res) => {setData(res.data)})
          .catch((err) => console.log(err));
    });
    useEffect(() => {
        axios.get("http://localhost:4000/mujeres")
          .then((res) => {setData(res.data)})
          .catch((err) => console.log(err));
    });
    useEffect(() => {
      axios.get("http://localhost:4000/admin/propuestas")
        .then((res) => {setData(res.data)})
        .catch((err) => console.log(err));
  });


    const handleDelete = (fk_manzanas) => {
        axios.delete("http://localhost:4000/admin/propuesta/eliminar/" + fk_manzanas)
          .then((res) => {
            window.location.reload(false);
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return (
    <div>
        <div className="d-flex h-75 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3 table-responsive">
        <div className="d-flex">
          <p className="h1">Propuestas</p>
          <Link to="/admin" className="btn btn-primary btn-lg m-1 ms-4">
            Volver
          </Link>
        </div>
        <table className="table table-bordered table-hover">
          <thead className="table-secondary">
            <tr>
              <th>Número de identidad de mujer</th>
              <th>Manzana</th>
              <th>Servicio</th>
              <th>Fecha propuesta</th>

            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((manzanas, servicios, mujeres, /* manzanas_servicios, */ index) => {
              return (
                <tr key={index}>
                  <td>{mujeres.nom_mujeres}</td>
                  <td>{manzanas.nom_manzana}</td>
                  <td>{servicios.nom_servicio}</td>
                 {/*  <td>{manzanas_servicios.manzanas_servicios}</td> */}
                  <td>
                    <button onClick={() => handleDelete(servicios.fk_manzanas)} className="btn btn-sm btn-danger m-1">
                      Eliminar
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default Propuesta