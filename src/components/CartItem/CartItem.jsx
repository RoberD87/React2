import React from 'react';

const CartItem = ({ producto, eliminarItem }) => {
    return (
        <div className='linea-prod'>
            <img src={producto.producto.img} alt={producto.producto.nombre} />
            <p>{producto.producto.nombre}</p>
            <p>Cantidad: {producto.cantidad}</p>
            <p>Valor unitario: ${producto.producto.precio * producto.cantidad}</p>
            <img src="../assets/img/del.png" className="tacho" alt="" onClick={() => eliminarItem(producto.producto.id)}/>
        </div>
    );
};

export default CartItem;