export default function ProductReducer(state, action) {
    const { type, payload } = action
    if (type === "PRODUCTS_FETCH_BEGIN") {
        return { ...state, loading: true }

    }
    if (type === "PRODUCTS_FETCHED") {
        const temp = payload.map((product) => {
            return (
                { ...product, price:product.price/10 + '9' }
            )
        }
        )
        return { ...state, products: temp, loading: false }
    }

    if (type === "SINGLE_PRODUCT_FETCHED") {
        const temp = { ...payload, price: payload.price / 10 + '9' }
        return {...state, single_product:temp,loading:false}
    }
    return state
}