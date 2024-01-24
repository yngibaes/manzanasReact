import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SerLeer() {
  const { id_servicios } = useParams();
  const [servicios, setServicio] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/admin/servicios/leer/" + id_servicios)
      .then((res) => setServicio(res.data[0]))
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="d-flex h-75 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <div className="p-2">
          <p className="h1 fst-italic">Servicio información</p>
          <p className="h4 fs-3">ID: {servicios.id_servicios}</p>
          <p className="h4 fs-3">Nombre: {servicios.nom_servicios}</p>
          <p className="h4 fs-3">Descripción: {servicios.descri_servicios}</p>
          <p className="h4 fs-3">Tipo: {servicios.tipo_servicios}</p>
          <p className="h4 fs-3">Categoria: {servicios.cate_servicios}</p>
        </div>
        <Link to={"/admin/servicios"} className="btn btn-primary me-2">
          Volver
        </Link>
        <Link to={`/admin/servicios/editar/${servicios.id_servicios}`} className="btn btn-primary me-2">
          Editar
        </Link>
      </div>
    </div>
  );
}

export default SerLeer;