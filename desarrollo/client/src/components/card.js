import React from 'react'
import {Link} from 'react-router-dom'

function Card(props) {
  return (
    <div>
            <div className="card mx-2 my-4 pt-3 text-center border border-success" style={{width: "19rem"}}>
                <img src={props.img} className="card-img-top col" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title pb-2">{props.title}</h5>
                    <Link to={"/"} className="btn btn-success">Saber más</Link>
                    </div>
        </div>
    </div>
  )
}

export default Card