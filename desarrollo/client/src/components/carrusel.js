import React from 'react'

function Carrusel() {
  return (
  <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="2000">
        <img src={require("./img/sistemacuidado.jpg")} className="d-block w-100 rounded-4 border" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={require("./img/manzana-cuidado-bosa.jpg")} className="d-block w-100 rounded-4 border" alt="..."/>
      </div>
   <div className="carousel-item">
        <img src={require("./img/bogotasistema.jpg")} className="d-block w-100 rounded-4 border" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carrusel
