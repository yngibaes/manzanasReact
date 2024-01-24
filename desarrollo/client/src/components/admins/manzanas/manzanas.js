import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Manzanas() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/admin/manzanas")
      .then((res) => {setData(res.data)})
      .catch((err) => console.log(err));
  });
  const handleDelete = (id_manzanas) => {
    axios.delete("http://localhost:4000/admin/manzanas/eliminar/" + id_manzanas)
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
          <p className="h1">Manzanas</p>
          <Link to="/admin" className="btn btn-primary btn-lg m-1 ms-4">
            Volver
          </Link>
        </div>

        <div className="d-flex justify-content-end">
          <Link to="/admin/manzanas/crear" className="btn btn-success btn-lg m-1">
            Crear +
          </Link>
        </div>
        <table className="table table-bordered table-hover">
          <thead className="table-secondary">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Localidad</th>
              <th>Dirreción</th>
              <th>Municipio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data && data.map((manzanas, index) => {
              return (
                <tr key={index}>
                  <td>{manzanas.id_manzanas}</td>
                  <td>{manzanas.nom_manzanas}</td>
                  <td>{manzanas.locali_manzanas}</td>
                  <td>{manzanas.dir_manzanas}</td>
                  <td>{manzanas.nom_municipios}</td>
                  <td>
                    <Link to={`/admin/manzanas/leer/${manzanas.id_manzanas}` } className="btn btn-sm btn-success m-1">
                      Mostrar información
                    </Link>
                    <Link to={`/admin/manzanas/editar/${manzanas.id_manzanas}`} className="btn btn-sm btn-primary m-1">
                      Editar
                    </Link>
                    <button onClick={() => handleDelete(manzanas.id_manzanas)} className="btn btn-sm btn-danger m-1">
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
export default Manzanas;