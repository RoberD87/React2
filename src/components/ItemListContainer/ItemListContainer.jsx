import {useState,useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import '../ItemList//itemList.css'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos,setProductos] = useState([]);

    const {categoryId} = useParams()

    useEffect(()=>{
        
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json()

                if(categoryId){
                    const filteredProducts = data.filter((p) => p.category == categoryId)
                    setProductos(filteredProducts)
                }else{
                    setProductos(data)
                }
  
            }catch(error){
                console.log("Error en el fetch "+error)
            }
        }

        fetchData()

    },[categoryId])


  return (
    <div className='itemcontainer'>

        {productos.length == 0 
        ? 
        <h1><img src="../assets/img/loader.gif" alt="" /> CARGANDO..</h1> 
        : 
        <ItemList productos={productos}/>
        }

    </div>
  )
}

export default ItemListContainer