import React from 'react'

function Card2(props) {
  return (
    <div class="card mx-1 my-4 p-2 ">
    <div class="card-body">
      <h5 class="main-card-title">{props.title}</h5>
      <p class="card-text">{props.descri}</p>
    </div>
    <img src={props.img} class="card-img-bottom" alt="..."/>
  </div>
  )
}

export default Card2
