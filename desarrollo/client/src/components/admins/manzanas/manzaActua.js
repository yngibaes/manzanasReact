import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ManzaActua() {
  const { id_manzanas } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nom_manzanas: '',
    locali_manzanas: '',
    dir_manzanas: '',
    nom_municipios: ''
  });

  useEffect(() => {
    axios.get("http://localhost:4000/admin/manzanas/leer/" + id_manzanas)
      .then((res) => {
        console.log(res);
        setValues({
          ...values,
          nom_manzanas: res.data[0].nom_manzanas,
          locali_manzanas: res.data[0].locali_manzanas,
          dir_manzanas: res.data[0].dir_manzanas,
          nom_municipios: res.data[0].nom_municipios
        });
      })
      .catch((err) => {
        console.log(err);
        console.log("Ay do, do funciona");
      });
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
      axios.put(`http://localhost:4000/admin/manzanas/editar/${id_manzanas}`, values)
        .then((res) => {
          alert("Se ha actualizado");
          console.log(res)
          navigate("/admin/manzanas");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  return (
    <div className="d-flex h-75 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <p className="h1">Actualiza la manzana</p>
          <div className="mb-3">
            <label htmlFor="nom_manzanas">Nombre: </label>
            <input
              type="text"
              placeholder="Digite su nombre"
              name="nom_manzanas"
              id="nom_manzanas"
              className="form-control"
              required
              value={values.nom_manzanas}
              onChange={(e) =>
                setValues({ ...values, nom_manzanas: e.target.value})
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="locali_manzanas" className="form-label">Localidad: </label>
            <input
              type="text"
              placeholder="Digite su apellido"
              name="locali_manzanas"
              id="locali_manzanas"
              className="form-control"
              required
              value={values.locali_manzanas}
              onChange={(e) =>
                setValues({...values, locali_manzanas: e.target.value})
              }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="dir_manzanas">Dirreción: </label>
            <input
              type="text"
              placeholder="Digite su télefono"
              name="dir_manzanas"
              id="dir_manzanas"
              className="form-control"
              required
              value={values.dir_manzanas}
              onChange={(e) =>
                setValues({...values, dir_manzanas: e.target.value})
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
          <button className="btn btn-success">
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ManzaActua;