import React, { useContext, useReducer } from "react";
import CartReducer from "../reducers/CartReducer";

const CartContext = React.createContext()

const initialState = {
    cart_products: [],
    no_of_items: 0
}
export default function CartProvider({ children }) {
    const [state, dispatch] = useReducer(CartReducer, initialState)
    
    const addToCart = (product) => {
        dispatch({type:"ADD_TO_CART",payload:product})
    }

    const removeFromCart = (id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: id })
    }

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    return useContext(CartContext)
}