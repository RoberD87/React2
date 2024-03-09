import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const { cart, vaciarCarrito, eliminarItem, totalCarrito } = useContext(CartContext)
    return (
        <div className='contenedor resumen'>
            {cart.length == 0
                ?
                <>
                    <h1>=(</h1>
                    <h2>El carro está vacío</h2>
                    <Link to={"/"}><button className='agregar'>IR AL INICIO</button></Link>
                </>
                :
                <>
                    <h1>Productos elegidos</h1>
                    {cart.map((p) => (
                        <CartItem key={p.producto.id} producto={p} eliminarItem={eliminarItem} />
                    ))}
                    <p className='total'>Total: ${totalCarrito()}</p>
                    <br />
                    <div className='final'>
                    <button onClick={vaciarCarrito} className='agregar'>Vaciar carrito</button>
                    <Link to={"/checkout"}><button className='agregar'>Finalizar compra</button></Link>
                    </div>
                </>
            }
        </div>
    );
};

export default Cart;