const initialState = {
    products:[],
    loading:false,
    error:''
}

const productReducer = (state = initialState , action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS":
            return {
                products:[],
                loading: true,
                error: ''
            }
        case "FETCH_PRODUCTS_SUCCESS":
            return {
                products: action.payload ,
                loading: false ,
                error: ''
            }
        case "FETCH_PRODUCTS_FAILUR":
            return {
                products: [],
                loading: false, 
                error: action.payload
            }
        default:
            return state;
    }
}

export default productReducer;