import React, { useContext, useState } from 'react';
import { db } from '../../firebase/config';
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
    const { cart, totalCarrito, cantidadCarrito, vaciarCarrito } = useContext(CartContext)

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")
    const manejadorFormulario = (event) => {

        event.preventDefault()

        //ALGUNOS MANEJOS DE ERRORES
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Completar los campos requeridos")
            return;
        }
        if (email !== emailConfirmacion) {
            setError("Los campos del email no coinciden")
            return;
        }

        const orden = {
            items: cart.map((producto) => ({
                id: producto.producto.id,
                nombre: producto.producto.nombre,
                cantidad: producto.cantidad
            })),
            total: totalCarrito(),
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "producto", productoOrden.id);
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock

                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setError("")
                        setOrdenId(docRef.id)
                        vaciarCarrito()
                    })
                    .catch((error) => {
                        console.log(error)
                        setError("Se produjo un error al crear la orden")
                    })

            })
            .catch((error) => {
                console.log(error)
                setError("No se puede actualizar el stock")
            })
    }

    return (
        <div className='contenedor resumen'>
            <h1>Ya casi tenés tu compra lista!</h1>
            <br />
            <p>Completá los datos a continuación:</p>
            <form onSubmit={manejadorFormulario}>
                <input name="Nombre" type='text' placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
                <input name="Apellido" type='text' placeholder="Apellido" onChange={(e) => setApellido(e.target.value)} />
                <input name="Teléfono" type='text' placeholder="Teléfono" onChange={(e) => setTelefono(e.target.value)} />
                <input name="Email" type='email' placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input name="EmailConfirmacion" placeholder="Confirme su email" type='email' onChange={(e) => setEmailConfirmacion(e.target.value)} />
                <button type='submit' className='agregar'>Completar compra</button>

                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {ordenId && (
                        <>
                        <hr />
                        <strong>
                            ¡Gracias por tu compra! Tu número de orden es: {ordenId}
                        </strong>
                        </>
                    )}
            </form>
        </div>
    );
};

export default Checkout;