import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ producto }) => {
    const [cart, setCart] = useState(false)
    const { agregarCarrito } = useContext(CartContext)
    const onAdd = (count) => {
        setCart(true)
        agregarCarrito(producto, count)
    }

    return (
        <div className='contenedor-prod'>
            <div>
                <img src={producto.img} alt={producto.nombre} />
                </div>
            <div className='detalles'>
            <h1>{producto.nombre}</h1>
            <hr />
            <p>{producto.descripcion}</p>
            
            <h2>${producto.precio}</h2>
            <small>Stock disponible: {producto.stock}</small>
            <hr />
            {producto.stock == 0 ? <span style="color:red">Sin Stock</span> : (
                cart ?
                    <Link to={'/cart'}> <button className='agregar'>Ir al carrito </button></Link>
                :
                <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
            )}
            </div>
        </div>
    );
};

export default ItemDetail;