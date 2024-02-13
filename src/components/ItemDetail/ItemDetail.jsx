import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({producto}) => {
    return (
        <div class="producto">
            <h1>{producto.title}</h1>
            <img src={producto.image} alt={producto.nombre} />
            <h3>Precio: u$d {producto.price}</h3>
            <small>Stock: {10}</small>
            <p>{producto.description}</p>
            <ItemCount initial={1} stock={10}/>
        </div>
    );
};

export default ItemDetail;