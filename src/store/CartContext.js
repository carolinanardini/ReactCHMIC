import {React, createContext, useState} from 'react';

export const CartContext = createContext({})

const {Provider} =CartContext


export const CartProvider = ({defaultValue=[],children}) =>{

    const [cart, setCart] =useState(defaultValue);

    const clearCart =() => {
        setCart ([]);
    }

    const agregarAlCarrito =(item,quantity) => {
        console.log(item)
        setCart(
            [
                ...cart,
                {
                    item:item,
                    quantity:quantity
                }
            ]
        )

    }

    const isInCart = (id) =>{
        return cart.find((element)=>element.item.id===id)
    }

    const context = {
        cart,
        clearCart,
        agregarAlCarrito
    }

    return(
        <Provider value ={context}>
            {children}
        </Provider>
    )

}

export default CartContext