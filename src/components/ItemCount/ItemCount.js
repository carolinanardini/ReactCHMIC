import './ItemCount.css';
import { useEffect, useState } from "react";

function ItemCount(props){

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

    const onAdd =(event) =>{
        setNum(event.target.value)
    }

    props.amount(num);

    

  return (

    <div className='counter'>

        <button onClick={restar}> - </button>
        <p className='numero' onChange={onAdd}>{num}</p>
        <button onClick={sumar}> + </button>
    
    </div>
  );
}

export default ItemCount;