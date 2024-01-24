import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EstCrear() {
  const [values, setValues] = useState({
    id_establecimiento: '',
    nom_establecimiento: '',
    admin_establecimiento: '',
    dir_establecimiento: '',
    id_servicios: '',
  });

  const [data, setData] = useState('')
  useEffect(() => {
    axios.get("http://localhost:4000/admin/establecimiento")
      .then((res) => { setData(res.data) })
      .catch((err) => console.log(err));
  });
  const [servicios, setDataS] = useState('')
  useEffect(() => {
    axios.get("http://localhost:4000/admin/servicios")
      .then((res) => {
        setDataS(res.data.map((servicios) => ({
          id_servicios: servicios.id_servicios,
          nom_servicios: servicios.nom_servicios
        })))
        console.log(servicios)
      })
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/admin/establecimiento/crear", values)
      .then((res) => {
        alert("Establecimiento creado")
        navigate("/admin/establecimiento");
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="d-flex h-75 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <p className="h1 text-muted mb-3">Crea un establecimiento</p>
          <div className="mb-3">
            <label htmlFor="nom_establecimiento">Nombre: </label>
            <input
              type="text"
              placeholder="Digite el nombre"
              name="nom_establecimiento"
              id="nom_establecimiento"
              className="form-control"
              required
              onChange={(e) =>
                setValues({ ...values, nom_establecimiento: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="admin_establecimiento">Admin: </label>
            <input
              type="text"
              placeholder="Digite el Admin"
              name="admin_establecimiento"
              id="admin_establecimiento"
              className="form-control"
              required
              onChange={(e) =>
                setValues({ ...values, admin_establecimiento: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dir_establecimiento">Dirreción: </label>
            <input
              type="text"
              placeholder="Digite la dirreción"
              name="dir_establecimiento"
              id="dir_establecimiento"
              className="form-control"
              required
              onChange={(e) =>
                setValues({ ...values, dir_establecimiento: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Servicios">Servicio: </label>
            <select htmlFor="Servicios" className="form-select" >
              <option selected>Escoge un servicio</option>
              {servicios.map((servicios, index) => (
                <option key={index} value={servicios.id_servicios}>{servicios.nom_servicios}</option>
              ))}
            </select>
          </div>
          <button className="btn btn-success" type="submit">
            Crear
          </button>
        </form>
      </div>
    </div>
  );
}

export default EstCrear;