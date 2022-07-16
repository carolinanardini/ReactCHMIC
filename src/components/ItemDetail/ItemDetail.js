import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import {useParams, NavLink} from 'react-router-dom'; 
import {useState, useEffect } from 'react';

function ItemDetail() {
  
  const params =useParams()
  const [detailFetch, setDetailFetch]=useState([])
  const [terminarCompra, setTerminarCompra]=useState(false)

  const fetchDetail =() => {
    fetch('/data.json')
    .then((response)=>response.json())
    .then((data)=> {setDetailFetch(data.filter(($data)=>$data.id===Number(params.id)))
    })
  }


  useEffect(() => {
    fetchDetail()
  }, [])

  const amountHandler =(newAmount) =>{
    setTerminarCompra(false)
    console.log(newAmount);
    setTerminarCompra(true)
  }

  return (
    <>
      {detailFetch.length !==0 && 
      
      <div className='flex'>
      <section className='recuadro'>
            
        <p className='imagen'>{detailFetch[0].img}</p>
          
      </section>
    

      <section className='derecha'>
        <p className='bold large'>{detailFetch[0].nombre}</p>
        
        <p className='italic'> {detailFetch[0].descripcion1}</p>
        <p className='italic'> {detailFetch[0].descripcion2}</p>
        <p className='italic'> {detailFetch[0].descripcion3}</p>
        <p className='italic'> {detailFetch[0].descripcion4}</p>
        <ItemCount amount={amountHandler}/>
        <button onClick={amountHandler} className='button'>Agregar al carrito</button>
        {terminarCompra && <button className='button'> <NavLink to='/cart'>Terminar mi compra</NavLink></button> }
        
      </section>

    </div>}
      
     

      
    </>

    // <div className='flex'>
    //   <section className='recuadro'>
            
    //     <p className='imagen'>{props.detail.img}</p>
           
    //   </section>
       


    //   <section className='derecha'>
    //     <p className='bold large'>{props.detail.nombre}</p>
        
    //     <p className='italic'> {props.detail.descripcion1}</p>
    //     <p className='italic'> {props.detail.descripcion2}</p>
    //     <p className='italic'> {props.detail.descripcion3}</p>
    //     <p className='italic'> {props.detail.descripcion4}</p>
    //     <ItemCount/>
    //     <button className='button'>Agregar al carrito</button>
    //   </section>

    // </div>
  );
}


  export default ItemDetail;