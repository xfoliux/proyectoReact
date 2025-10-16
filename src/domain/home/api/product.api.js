export const getProductApi = async () => {
    const response = await fetch ("https://fakestoreapi.com/products");
    const productos = await response.json();
    return productos;
}