import React, { useState } from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [contador, setContador] = useState(1);
    const decrementar = () => {
        if (contador > initial) {
            setContador(contador - 1)
        }
    }
    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const agregarCarrito = () => {
        onAdd(contador)
    }
    return (
        <div className='seleccionar'>
            <button onClick={decrementar} className='boton'>-</button>
            <p className='cantidad'>{contador}</p>
            <button onClick={incrementar} className='boton'>+</button>
            <button onClick={agregarCarrito} className='agregar'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;