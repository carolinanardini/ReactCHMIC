import ItemDetail from '../ItemDetail/ItemDetail.js';
import './ItemDetailContainer.css';

import { useEffect, useState } from 'react';


function ItemDetailContainer() {

  // const [detail, setDetail] =useState([])


  // useEffect(()=>{
  //   setTimeout(() => {

  //       fetch('data.json') //Trae el responde completo
  //       .then((resp)=>resp.json()) //Extrae la informacion a utilizar
  //       .then((data)=>setDetail(data.find(i=>i.id===1))) //Setea esa info en nuestro state      

  
  //   }, 2000);

  // },[])

  return (
    
    <div className="">
    
        <ItemDetail/>
     

    </div>

  );
}

export default ItemDetailContainer;