import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Servicios() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/admin/servicios")
      .then((res) => {setData(res.data)})
      .catch((err) => console.log(err));
  });
  const handleDelete = (id_servicios) => {
    axios.delete("http://localhost:4000/admin/servicios/eliminar/" + id_servicios)
      .then((res) => {
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="d-flex h-75 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3 table-responsive">
      <div className="d-flex">
          <p className="h1">Servicios</p>
          <Link to="/admin" className="btn btn-primary btn-lg m-1 ms-4">
            Volver
          </Link>
        </div>

        <div className="d-flex justify-content-end">
          <Link to="/admin/servicios/crear" className="btn btn-success btn-lg m-1">
            Crear +
          </Link>
        </div>
        <table className="table table-bordered table-hover">
          <thead className="table-secondary">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Tipo</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data && data.map((servicios, index) => {
              return (
                <tr key={index}>
                  <td>{servicios.id_servicios}</td>
                  <td>{servicios.nom_servicios}</td>
                  <td>{servicios.descri_servicios}</td>
                  <td>{servicios.tipo_servicios}</td>
                  <td>{servicios.cate_servicios}</td>
                  <td>
                    <Link to={`/admin/servicios/leer/${servicios.id_servicios}` } className="btn btn-sm btn-success m-1">
                      Mostrar información
                    </Link>
                    <Link to={`/admin/servicios/editar/${servicios.id_servicios}`} className="btn btn-sm btn-primary m-1">
                      Editar
                    </Link>
                    <button onClick={() => handleDelete(servicios.id_servicios)} className="btn btn-sm btn-danger m-1">
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
  );
}
export default Servicios;