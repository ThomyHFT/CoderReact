import { createContext, useState } from "react";


export const CartContext= createContext({});

export const CartProvider=({children})=>{

    const [cart, setCart]=useState([]);


const addToCart =(product, quantity)=>{    
    if(exist(product.id)){
        
        const UpdateCart=cart.map(prod=>{
            if(prod.id===product.id){
                return {...prod, quantity:prod.quantity + quantity, total:prod.total + product.price*quantity}
            }
            return prod
        })
        setCart(UpdateCart)
    }
    else{
        setCart(prevCart=>[...prevCart,{...product, quantity,total:product.price*quantity}])
    }

    
}
const clearCart=()=>{
    setCart([])
}

const deleteById=(id)=>{
    setCart(cart.filter(prod=>prod.id!==id))
}

const exist=(id)=>{
    return cart.some(prod=>prod.id===id)
}

const totalCart = () => {
    let total = 0;
    for (const prod of cart) {
      total += prod.total;
    }
    return total;
  }

    return(
        <CartContext.Provider value={{cart, addToCart, clearCart, deleteById, totalCart}}>
            {children}
        </CartContext.Provider>

    )
}