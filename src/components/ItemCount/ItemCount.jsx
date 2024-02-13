import React, { useState } from 'react'

const ItemCount = ({ initial, stock }) => {

    const [contador, setContador] = useState(1);

    const suma = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const resta = () => {
        if (contador > initial) {
            setContador(contador - 1)
        }
    }

    const agregarCarrito = () => {
        alert("Se agregaron " + contador + " productos al carrito")
    }

    return (
        <div>
            <button onClick={resta}>-</button>

            <p>{contador}</p>

            <button onClick={suma}>+</button>

            <button onClick={agregarCarrito}>Agregar al carrito</button>

        </div>
    )
}

export default ItemCount;