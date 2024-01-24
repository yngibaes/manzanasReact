import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ManzaCrear() {
  const [values, setValues] = useState({
    nom_manzanas: '',
    locali_manzanas: '',
    dir_manzanas: '',
    nom_municipios: ''
  });
  const [data, setData] = useState('')
  useEffect(() => {
    axios.get("http://localhost:4000/admin/manzanas")
      .then((res) => {setData(res.data)})
      .catch((err) => console.log(err));
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/admin/manzanas/crear", values)
      .then((res) => {
        console.log(res);
        alert("Manzana creada")
        navigate("/admin/manzanas");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="d-flex h-75 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <p className="h1 text-muted mb-3">Crea una nueva manzana</p>
          <div className="mb-3">
            <label htmlFor="nom_manzanas" className="form-label fw-bold fs-5">Nombre</label>
            <input
              type="text"
              placeholder="Digite el nombre"
              name="nom_manzanas"
              id="nom_manzanas"
              className="form-control"
              required
              onChange={(e) =>
                setValues({ ...values, nom_manzanas: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="locali_manzanas" className="form-label fw-bold fs-5">Localidad</label>
            <input
              type="text"
              placeholder="Digite la localidad"
              name="locali_manzanas"
              id="locali_manzanas"
              className="form-control"
              required
              onChange={(e) =>
                setValues({ ...values, locali_manzanas: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="dir_manzanas" className="form-label fw-bold fs-5">Dirreción</label>
            <input
              type="text"
              placeholder="Digite la dirreción"
              name="dir_manzanas"
              id="dir_manzanas"
              className="form-control"
              required
              onChange={(e) =>
                setValues({ ...values, dir_manzanas: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
          <label htmlFor="nom_municipios" className="form-label fw-bold fs-5">Municipio</label>
                <input
                  type="text"
                  placeholder="Distrito Capital"
                  name="nom_municipios"
                  id="nom_municipios"
                  className="form-control"
                  disabled
                  value={values.nom_municipios="Distrito Capital"}
                  onChange={(e) =>
                    setValues({ ...values, nom_municipios: e.target.value })
                  }
                />
          </div>
          <button className="btn btn-success" type="submit">
            Crear
          </button>
        </form>
      </div>
    </div>
  );
}

export default ManzaCrear;