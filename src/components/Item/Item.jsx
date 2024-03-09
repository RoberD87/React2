import React from 'react'
import '../../css/item.css'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
  return (
    <Link to={`/detalle/${producto.id}`}>
      <div key={producto.id} className='producto'>
        <h2>{producto.nombre}</h2>
        <img src={producto.img} alt={producto.nombre} />
        <p>${producto.precio}</p>
      </div>
    </Link>
  )
}

export default Item;