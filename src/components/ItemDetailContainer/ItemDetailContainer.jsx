import React, {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [producto,setProducto] = useState([]);

  const {id} = useParams()

    useEffect(()=>{
        
      const fetchData = async () => {
          try {
              const response = await fetch("https://fakestoreapi.com/products");
              const data = await response.json()
              const product = data.find((p)=>p.id == id)
              setProducto(product)
          }catch(error){
              console.log("Error en el fetch "+error)
          }
      }

      fetchData()

  },[])

  console.log(producto)
    
  return (
    <div>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer