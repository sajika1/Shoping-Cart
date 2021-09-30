import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const getData = async () => {
    const products = await axios.get(`${BASE_URL}/products`);
    return products.data;
}
