import React from 'react'
import Header from '../components/header'
import Iniciarsesion from '../components/iniciarsesión'
import Footer from '../components/footer'

function PageInicio() {
  return (
    <div style={{ backgroundColor: "gainsboro" }} className='vh-100'>    
    <Header
                boton1="Inicio"
                link1="/homepage"
                boton3="Encuentranos"
                link3="/encuetranos"
                boton4="Conoce más"
                boton41="Facebook"
                link41="https://youtu.be/tAcKfnf0zv4?si=XJo6Tvqs0IHQYyJh"
                boton42="Youtube"
                link42="https://youtu.be/QU9c0053UAU?si=qgfon_uDutbvSLD8"
                boton43="Instagram"
                link43="https://youtu.be/nOI67IDlNMQ?si=vbCxe_aEbJ4mZCZN"
                boton5="Haz parte del cuidado"
                boton51="Iniciar sesión"
                link51="/iniciarsesion"
                boton52="Registrarse"
                link52="/registrarse"
            />
        <Iniciarsesion/>
        <Footer/>
        </div>
  )
}

export default PageInicio
