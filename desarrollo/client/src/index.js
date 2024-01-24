/* import React from "react";
import ReactDOM  from "react-dom";
import Header from "./components/header";

/* const data = {
  name: '',
  surname: '',
  nickname: '',
  img: ''
}
function Datos(data){
  return <h1>Tu nombre es {data.name} {data.surname}, y tu apodo es {data.nickname} <img src={data.img}/></h1>;
}
 *//*
const element=
<div>
<Header/>
{/* <Datos name='Ana' surname='Amaya' nickname='Anita monita' img='https://img.freepik.com/vector-gratis/nina-feliz-mariposa_1450-103.jpg'/>
<Datos name='Mateo' surname='Arias' nickname='Mateito' img='https://previews.123rf.com/images/mimosastudio/mimosastudio2110/mimosastudio211000032/176472276-ni%C3%B1o-feliz-de-dibujos-animados-levantando-las-manos.jpg'/>
<Datos name='Gato' surname='Amaya' nickname='Gatom' img='https://img.freepik.com/vector-gratis/personaje-dibujos-animados-gatito-ojos-dulces_1308-133242.jpg'/> */
/*</div>
const root = document.getElementById('root')
ReactDOM.render(element,root)*/

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <element/>
  </React.StrictMode>
); */

/* Crear página desde JavaScript
const element = document.createElement('h1');
element.innerHTML='Hola mundo';

const root = document.getElementById('root');
root.appendChild(element); */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);