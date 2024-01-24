import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EstActua() {
  const [values, setValues] = useState({
    id_establecimiento: '',
    nom_establecimiento: '',
    admin_establecimiento: '',
    dir_establecimiento: '',
    id_servicios: '',
  });
  const [data, setData] = useState([]);
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
        console.log(servicios.id_servicios, servicios.nom_servicios)
      })
      .catch((err) => console.log(err));
  }, []);
  const { id_establecimiento } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:4000/admin/establecimiento/leer/${id_establecimiento}`)
      .then((res) => {
        setValues({
          ...values,
          nom_establecimiento: res.data[0].nom_establecimiento,
          admin_establecimiento: res.data[0].admin_establecimiento,
          dir_establecimiento: res.data[0].dir_establecimiento,
          id_servicios: res.data[0].id_servicios,
        });
      })
      .catch((err) => {
        console.log(err);
        console.log("Ay do, do funciona");
      });
  }, []);

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
      axios.put(`http://localhost:4000/admin/establecimiento/editar/${id_establecimiento}`, values)
        .then((res) => {
            alert("Se ha actualizado");
            navigate("/admin/establecimiento");  
            console.log(res)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  return (
    <div className="d-flex h-75 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form>
          <p className="h1">Actualiza el establecimiento</p>
          <div className="mb-3">
            <label htmlFor="nom_establecimiento">Nombre: </label>
            <input
              type="text"
              placeholder="Digite el nombre"
              name="nom_establecimiento"
              id="nom_establecimiento"
              className="form-control"
              required
              value={values.nom_establecimiento}
              onChange={(e) =>
                setValues({ ...values, nom_establecimiento: e.target.value})}
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
              value={values.admin_establecimiento}
              onChange={(e) =>
                setValues({ ...values, admin_establecimiento: e.target.value})}
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
              value={values.dir_establecimiento}
              onChange={(e) =>
                setValues({ ...values, dir_establecimiento: e.target.value})}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Servicios">Servicio: </label>
            <select htmlFor="Servicios" className="form-select" onChange={(e) =>
              setValues({ ...values, id_servicios: e.target.value })}>
              <option selected>Escoge un servicio</option>
              {/* {servicios.map((servicios, id_servicios) => (
                <option key={servicios.id_servicios} value={id_servicios}>{servicios.nom_servicios}</option>
              ))} */}
            </select>
          </div>
          <button className="btn btn-success" onClick={handleUpdate}>
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
}

export default EstActua;