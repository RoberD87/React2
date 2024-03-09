import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const { cantidadCarrito } = useContext(CartContext)
    return (
        <div>
            <img src="../assets/img/carro.png" alt="" className='carrolleno'/>
            {cantidadCarrito() == 0 ? null: <p className='cantidadcarrolleno'>{cantidadCarrito()}</p>}
        </div>
    );
};

export default CartWidget;