import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import '../../css/itemList.css'
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams()
  useEffect(() => {
    const misProductos =
      categoryId ?
        query(collection(db, "producto"), where("categoria", "==", categoryId))
        :
        query(collection(db, "producto"), where("destacado", "==", "si"))
    getDocs(misProductos)
      .then((res) => {
        const nuevosProductos = res.docs.map((doc) => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProductos(nuevosProductos)
      })
      .catch((error) => console.log(error))
  }, [categoryId])
  return (
    <>
    {
    categoryId ? 
      null
    :
      <div className='banner'>
        <img src="../assets/img/banner.webp" alt="" />
        <hr />
        <h2>Productos destacados</h2>
      </div>
    }
    <div className='contenedor'>
      {productos.length == 0 ? (<h1>CARGANDO..</h1>) : (<ItemList productos={productos} />)}
    </div>
    </>
  )
}
export default ItemListContainer