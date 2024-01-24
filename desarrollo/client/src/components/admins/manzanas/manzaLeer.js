import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ManzaLeer() {
  const { id_manzanas } = useParams();
  const [manzanas, setManzanas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/admin/manzanas/leer/" + id_manzanas)
      .then((res) => setManzanas(res.data[0]))
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="d-flex h-75 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <div className="p-2">
          <p className="h1 fst-italic">Manzanas información</p>
          <p className="h4 fs-3">ID: {manzanas.id_manzanas}</p>
          <p className="h4 fs-3">Nombre: {manzanas.nom_manzanas}</p>
          <p className="h4 fs-3">Localidad: {manzanas.locali_manzanas}</p>
          <p className="h4 fs-3">Dirreción: {manzanas.dir_manzanas}</p>
          <p className="h4 fs-3">Municipio: {manzanas.nom_municipios}</p>
        </div>
        <Link to={"/admin/manzanas"} className="btn btn-primary me-2">
          Volver
        </Link>
        <Link to={`/admin/manzanas/editar/${manzanas.id_manzanas}`} className="btn btn-primary me-2">
          Editar
        </Link>
      </div>
    </div>
  );
}

export default ManzaLeer;