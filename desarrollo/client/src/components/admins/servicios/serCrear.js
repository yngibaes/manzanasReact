import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SerCrear() {
  const [values, setValues] = useState({
    nom_servicios: '',
    descri_servicios: '',
    tipo_servicios: '',
    cate_servicios: ''
  });
  const [data, setData] = useState('')
  useEffect(() => {
    axios.get("http://localhost:4000/admin/servicios")
      .then((res) => {setData(res.data)})
      .catch((err) => console.log(err));
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/admin/servicios/crear", values)
      .then((res) => {
        console.log(res);
        alert("Servicio creado")
        navigate("/admin/servicios");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="d-flex h-75 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <p className="h1 text-muted mb-3">Crea un nuevo servicio</p>
          <div className="mb-3">
            <label htmlFor="nom_servicios" className="form-label fw-bold fs-5">Nombre</label>
            <input
              type="text"
              placeholder="Digite el nombre"
              name="nom_servicios"
              id="nom_servicios"
              className="form-control"
              required
              onChange={(e) =>
                setValues({ ...values, nom_servicios: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="descri_servicios" className="form-label fw-bold fs-5">Descripción</label>
            <input
              type="text"
              placeholder="Digite la descripción"
              name="descri_servicios"
              id="descri_servicios"
              className="form-control"
              required
              onChange={(e) =>
                setValues({ ...values, descri_servicios: e.target.value })
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tipo_servicios" className="form-label fw-bold fs-5">Tipo de servicio</label>
            <input
              type="text"
              placeholder="Digite el tipo de servicio"
              name="tipo_servicios"
              id="tipo_servicios"
              className="form-control"
              required
              onChange={(e) =>
                setValues({ ...values, tipo_servicios: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
          <label htmlFor="cate_servicios" className="form-label fw-bold fs-5">Categoria</label>
                <input
                  type="text"
                  placeholder="Digite la categoria del servicio"
                  name="cate_servicios"
                  id="cate_servicios"
                  className="form-control"
                  required
                  onChange={(e) =>
                    setValues({ ...values, cate_servicios: e.target.value })
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

export default SerCrear;