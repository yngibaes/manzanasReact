import React from 'react'

function Footer() {
  return (
    <footer class="mt-3 p3">
  <ul class="nav justify-content-center border-bottom pb-3 mb-3">

    <li>
      <img src={require("./img/logo-sidicu-bogota-color_.png")} width="510"/>
    </li>
  </ul>
  <p class="text-center text-body-secondary">© 2023 - Alcaldía Mayor de Bogotá - Todos los derechos reservados.</p>
</footer>
  )
}

export default Footer
