import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function EstLeer() {
  const { id_establecimiento } = useParams();
  const [establecimiento, setEstablecimiento] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/admin/establecimiento/leer/" + id_establecimiento)
      .then((res) => setEstablecimiento(res.data[0]))
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="d-flex h-75 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <div className="p-2">
          <p className="h1 fst-italic">Establecimiento información</p>
          <p className="h4 fs-3">ID: {establecimiento.id_establecimiento}</p>
          <p className="h4 fs-3">Nombre: {establecimiento.nom_establecimiento}</p>
          <p className="h4 fs-3">Admin: {establecimiento.admin_establecimiento}</p>
          <p className="h4 fs-3">Establecimiento: {establecimiento.dir_establecimiento}</p>
          <p className="h4 fs-3">Servicio: {establecimiento.fk_servicios}</p>
    
        </div>
        <Link to={"/admin/establecimiento"} className="btn btn-primary me-2">
          Volver
        </Link>
        <Link to={`/admin/establecimiento/editar/${establecimiento.id_establecimiento}`} className="btn btn-primary me-2">
          Editar
        </Link>
      </div>
    </div>
  );
}

export default EstLeer;
