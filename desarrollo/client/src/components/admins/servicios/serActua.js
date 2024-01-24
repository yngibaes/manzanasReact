import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SerActua() {
  const { id_servicios } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    nom_servicios: '',
    descri_servicios: '',
    tipo_servicios: '',
    cate_servicios: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:4000/admin/servicios/leer/${id_servicios}`)
      .then((res) => {
        console.log(res);
        setValues({
          ...values,
          nom_servicios: res.data[0].nom_servicios,
          descri_servicios: res.data[0].descri_servicios,
          tipo_servicios: res.data[0].tipo_servicios,
          cate_servicios: res.data[0].cate_servicios
        });
      })
      .catch((err) => {
        console.log(err);
        console.log("Ay do, do funciona");
      });
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
      axios.put(`http://localhost:4000/admin/servicios/editar/${id_servicios}`, values)
        .then((res) => {
          alert("Se ha actualizado");
          console.log(res)
          navigate("/admin/servicios");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  return (
    <div className="d-flex h-75 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <p className="h1">Actualiza el servicio</p>
          <div className="mb-3">
            <label htmlFor="nom_servicios">Nombre: </label>
            <input
              type="text"
              placeholder="Digite su nombre"
              name="nom_servicios"
              id="nom_servicios"
              className="form-control"
              required
              value={values.nom_servicios}
              onChange={(e) =>
                setValues({ ...values, nom_servicios: e.target.value})
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
              value={values.descri_servicios}
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
              value={values.tipo_servicios}
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
                  value={values.cate_servicios}
                  onChange={(e) =>
                    setValues({ ...values, cate_servicios: e.target.value })
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

export default SerActua;