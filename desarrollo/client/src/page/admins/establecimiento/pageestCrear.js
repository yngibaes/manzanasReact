import React from 'react'
import Header from '../../../components/header'
import EstCrear from '../../../components/admins/establecimiento/estCrear'

function PageestCrear() {
  return (
      <div className="bg-dark vh-100">
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
        <EstCrear/>
    </div>
  )
}

export default PageestCrear
