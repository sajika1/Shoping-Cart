import axios from "axios";

const fetchProductsRequest = () => {
    return {
        type: 'FETCH_PRODUCTS'
    }
}

const fetchProductsSuccess = products => {
    return {
        type: 'FETCH_PRODUCTS_SUCCESS',
        payload: products
    }
}

const fetchProductsFailur = error => {
    return {
        type: 'FETCH_PRODUCTS_FAILUR',
        payload: error
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest());
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                dispatch(fetchProductsSuccess(res.data))
            })
            .catch(error => dispatch(fetchProductsFailur(error.message)))
    }
}