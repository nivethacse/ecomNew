function FilterReducer(state, action) {
    if (action.type === "LOAD_PRODUCTS") {
        let maxPrice = action.payload.map((p) => p.price)
        maxPrice = Math.max(...maxPrice)
        return { ...state, all_products: action.payload, filtered_products: action.payload, filters: { ...state.filters, max_price: maxPrice, price: maxPrice } }
    }
    if (action.type === "SET_GRID_VIEW") {
        return { ...state, grid_view: true }
    }
    if (action.type === "SET_LIST_VIEW") {
        return { ...state, grid_view: false }
    }
    if (action.type === "UPDATE_SORT") {
        return { ...state, sort: action.payload }
    }
    if (action.type === "SORT_PRODUCTS") {
        const { sort, filtered_products } = state
        let tempProducts = []
        if (sort === "price-lowest") {
            tempProducts = filtered_products.sort((a, b) => {
                return a.price - b.price
            })
        }
        if (sort === "price-highest") {
            tempProducts = filtered_products.sort((a, b) => {
                return b.price - a.price
            })
        }
        if (sort === "name-a-z") {
            tempProducts = filtered_products.sort((a, b) => {
                return a.name.localeCompare(b.name)
            })
        }
        if (sort === "name-z-a") {
            tempProducts = filtered_products.sort((a, b) => {
                return b.name.localeCompare(a.name)
            })
        }
        return { ...state, filtered_products: tempProducts }
    }
    if (action.type === "UPDATE_FILTERS") {
        const { name, value } = action.payload
        return { ...state, filters: { ...state.filters, [name]: value } }
    }
    if (action.type === "FILTER_PRODUCTS") {
        const { all_products } = state
        const { text, category, company, color, max_price, price, freeShipping } = state.filters
        let tempProducts = [...all_products]
        if (text) {
            tempProducts = tempProducts.filter((product) =>
                product.name.toLowerCase().startsWith(text)
            )
        }
        if (category !== "all") {
            tempProducts = tempProducts.filter((product) =>
                product.category === category
            )
        }
        if (company !== "all") {
            tempProducts = tempProducts.filter((product) =>
                product.company === company
            )
        }
        if (color !== "all") {
            tempProducts = tempProducts.filter((product) =>
                product.colors.find((c) => c === color)
            )
        }
        if (price !== max_price) {
            tempProducts = tempProducts.filter((product) =>
                product.price <= price
            )
        }
        if (freeShipping) {
            tempProducts = tempProducts.filter((product) =>
                product.shipping === true
            )
        }
        return { ...state, filtered_products: tempProducts }
    }
    if (action.type === "CLEAR_FILTERS") {
        return {
            ...state, filtered_products: state.all_products,
            filters: { ...state.filters, text: "", category: "all", company: "all", color: "all", price: state.filters.max_price, freeShipping: false }
        }
    }
    return state;
}
export default FilterReducer;