export default function CartReducer(state, action) {
    const { type, payload } = action
    if (type === "ADD_TO_CART") {
        const temp = [...state.cart_products, payload]
        return { ...state, cart_products: temp, no_of_items: state.no_of_items + 1 }
    }
    if (type === "REMOVE_FROM_CART") {
        const temp = state.cart_products.filter((product) => product.id !== payload)
        return { ...state, cart_products: temp, no_of_items: state.no_of_items - 1 }
    }
    return state
}