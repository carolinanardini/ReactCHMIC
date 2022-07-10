import './ItemCount.css';
import { useState } from "react";

function ItemCount(){

    const [stock, setStock] = useState(5);

    const [num, setNum] = useState(0);
    
    const sumar=() => {
        if(num<stock){

            setNum(num+1)
        }
    }

    const restar=() => {
        if (num>0){
            setNum(num-1)
        }
    }

  return (

    <div className='counter'>

        <button onClick={restar}> - </button>
        <p className='numero'>{num}</p>
        <button onClick={sumar}> + </button>
    
    </div>
  );
}

export default ItemCount;