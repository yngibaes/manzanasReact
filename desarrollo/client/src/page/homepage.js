import React from "react";
import Card from "../components/card";
import Header from "../components/header";
import Carrusel from "../components/carrusel";
import Card2 from "../components/card2";
import Footer from "../components/footer";

function Homepage() {
    return (
        <div style={{ backgroundColor: "gainsboro" }} /* className="vh-100" */>
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
            {/*  <div class="container d-flex justify-content-center col-lg-8 col-md-4">
                <Card 
                img={require('../design/img/Logo.png')}
                title="Lavar loza"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                <Card 
                img={require('../design/img/Logo.png')}
                title="Hacer aseo"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                <Card 
                img={require('../design/img/Logo.png')}
                title="Quedarse en casa"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
                <Card 
                img={require('../design/img/Logo.png')}
                title="PPP(parir un puto pelao)"
                description="Some quick example text to build on the card title and make up the bulk of the card's content."/>
            </div> */}
            <div className="container">
                <Carrusel />
            </div>
            <div class="container d-flex justify-content-center">
                <Card2
                    title="¿Que somos?"
                    descri="Las Manzanas del Cuidado son espacios ubicados en Bogotá, donde las cuidadoras pueden acceder a servicios gratuitos para su desarrollo personal y profesional."
                    img={require('../components/img/manzana-del-cuidado-claudia-lopez-bogota.jpeg')}
                />
                <Card2
                    title="¿Que brindamos?"
                    descri="Estos servicios incluyen educación, cuidado y bienestar, y buscan contribuir a la equidad de género, al empoderamiento de las mujeres y al fortalecimiento de las familias."
                    img={require('../components/img/09_12.3_Territorio_Foto1.jpeg')}
                />
            </div>
            <h1 class="container d-flex justify-content-center">
                Conoce Nuestros Servicios
            </h1>
            <div class="container d-flex justify-content-center col-lg-10">
  <div class=" d-flex justify-content-center">
            <Card
            img={require('../components/img/png/woman.png')}
            title="Para mujeres y cuidadoras"/>
            <Card
            img={require('../components/img/png/old-man.png')}
            title="Para quienes
            requieren cuidado
            o apoyo"/>
            <Card
            img={require('../components/img/png/family.png')}
            title="Para las familias
            y la ciudadanía
            en general"/>
            <Card
            img={require('../components/img/png/autobus.png')}
            title="Buses del cuidado"/>
            </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Homepage