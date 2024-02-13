import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'


const Item = ({producto}) => {

  return (

    <Link to={`/detalle/${producto.id}`}>
      <div key={producto.id} className='container'>
        <img src={producto.image} alt={producto.title} />
        <h2>{producto.title}</h2>
      </div> 
    </Link>
    
  )
}

export default Item;