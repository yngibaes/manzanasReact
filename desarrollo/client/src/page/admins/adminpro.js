import React from 'react'
import Header from '../../components/header'
import Propuesta from '../../components/admins/propuestas/propuesta'

function Adminpro() {
  return (
    <div>
      <Header
                boton1="Manzanas" 
                link1="/admin"  
                boton2="Propuestas"
                link2="/admin/propuestas"
                boton4="Administrar"
                boton41="Manzanas"
                link41="/admin/manzanas"
                boton42="Servicios"
                link42="/admin/servicios"
                boton43="Establecimientos"
                link43="/admin/establecimiento"/>
        <Propuesta/>
    </div>
  )
}

export default Adminpro