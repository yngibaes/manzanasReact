/* import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./components/paginas/inicio.js";
import FORM from "./components/formulario.js";
import servicio from "./components/paginas/Serv.js";
import Contacto from "./components/paginas/contac.js";
import Login from "./components/paginas/login.js";
import Mujeres from "./components/paginas/mujeres.js";
import Form from "./components/propu.js";
import Headermu from "./components/mujh.js";
import regis from "./components/regis.js";
import inises from "./components/inises.js";
//Pasando a JS mas moderno
const App=()=>(//No se necesita el return
  
    <BrowserRouter>
    <Routes>
      {/* Exat es para dar precision de cual 
      se puede crear uno si no se encuentra la pagina
       }
         <Route path="/contac" Component={Contacto}/>
   <Route path="/Serv" Component={servicio}/>
    <Route path="/inicio" Component={Inicio}/>
    <Route path="/formulario" Component={FORM}/>
    <Route path="/login" Component={Login}/>
    <Route path="/mujeres" Component={Mujeres}/>
       <Route path="/mujeres" Component={Mujeres}/>
       <Route path="/propu" Component={Form}/>
       <Route path="/regis" Component={regis}/>
       <Route path="/mujh.js" Component={Headermu}/>
       <Route path="/inises" Component={inises}/>
    </Routes>
    </BrowserRouter>  
);

export default App */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Form from "./components/registrarse";

//Paginas
import Adminpage from "./page/admins/adminpage.js";
import Adminpro from "./page/admins/adminpro.js";
import Homepage from "./page/homepage.js";
import Iniciarsesion from "./components/iniciarsesión.js";

//Municipios
import Pageest from "./page/admins/establecimiento/pageest.js";
import PageestCrear from "./page/admins/establecimiento/pageestCrear.js";
import PageestLeer from "./page/admins/establecimiento/pageestLeer.js";
import PageestActua from "./page/admins/establecimiento/pageestActua.js";

//Manzanas
import Pageman from "./page/admins/manzanas/pageman.js"
import PagemanCrear from "./page/admins/manzanas/pagemanCrear.js";
import PagemanLeer from "./page/admins/manzanas/pagemanLeer.js";
import PagemanActua from "./page/admins/manzanas/pagemanActua.js";

//Servicios
import Pageser from "./page/admins/servicios/pageser.js";
import PageserCrear from "./page/admins/servicios/pageserCrear.js";
import PageserLeer from "./page/admins/servicios/pageserLeer.js";
import PageserActua from "./page/admins/servicios/pageserActua.js";
import PageInicio from "./page/pageinicio.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/*Homepage*/}
        <Route path="" element={<Homepage/>}/>
        <Route path="/iniciarsesion" element={<PageInicio/>}/>

        {/* Admin */}
        <Route path="/admin" element={<Adminpage />} />
        <Route path="/admin/propuestas" element={<Adminpro />} />

        {/* Establecimiento */}
        <Route path="/admin/establecimiento" element={<Pageest />} />
        <Route path="/admin/establecimiento/crear" element={<PageestCrear />} />
        <Route path="/admin/establecimiento/leer/:id_establecimiento" element={<PageestLeer />} />
        <Route path="/admin/establecimiento/editar/:id_establecimiento" element={<PageestActua />} />

        {/* Manzanas */}
        <Route path="/admin/manzanas" element={<Pageman />} />
        <Route path="/admin/manzanas/crear" element={<PagemanCrear />} />
        <Route path="/admin/manzanas/leer/:id_manzanas" element={<PagemanLeer />} />
        <Route path="/admin/manzanas/editar/:id_manzanas" element={<PagemanActua />} />

        {/* Servicios */}
        <Route path="/admin/servicios" element={<Pageser />} />
        <Route path="/admin/servicios/crear" element={<PageserCrear />} />
        <Route path="/admin/servicios/leer/:id_servicios" element={<PageserLeer />} />
        <Route path="/admin/servicios/editar/:id_servicios" element={<PageserActua />} />

        <Route path="/registrar/ola" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;