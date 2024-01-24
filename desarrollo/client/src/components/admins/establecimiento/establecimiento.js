import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Establecimiento() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/admin/establecimiento")
      .then((res) => { setData(res.data) })
      .catch((err) => console.log(err));
  });
  const handleDelete = (id_establecimiento) => {
    axios.delete("http://localhost:4000/admin/establecimiento/eliminar/" + id_establecimiento)
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
          <p className="h1">Establecimiento</p>
          <Link to="/admin" className="btn btn-primary btn-lg m-1 ms-4">
            Volver
          </Link>
        </div>

        <div className="d-flex justify-content-end">
          <Link to="/admin/establecimiento/crear" className="btn btn-success btn-lg m-1">
            Crear +
          </Link>
        </div>
        <table className="table table-bordered table-hover">
          <thead className="table-secondary">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Admin</th>
              <th>Dirrecion</th>
              <th>Servicios</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data && data.map((establecimiento, index) => {
              return (
                <tr key={index}>
                  <td>{establecimiento.id_establecimiento}</td>
                  <td>{establecimiento.nom_establecimiento}</td>
                  <td>{establecimiento.admin_establecimiento}</td>
                  <td>{establecimiento.dir_establecimiento}</td>
                  <td>{establecimiento.fk_servicios}</td>

                  <td>
                    <Link to={`/admin/establecimiento/leer/${establecimiento.id_establecimiento}`} className="btn btn-sm btn-success m-1">
                      Mostrar información
                    </Link>
                    <Link to={`/admin/establecimiento/editar/${establecimiento.id_establecimiento}`} className="btn btn-sm btn-primary m-1">
                      Editar
                    </Link>
                    <button onClick={() => handleDelete(establecimiento.id_establecimiento)} className="btn btn-sm btn-danger m-1">
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
export default Establecimiento;