import { axios } from "axios";
const baseUrl = "http://localhost:4242";

export const getAllProductsApi = async () => {
  console.log("Get All Products Api call");
  try {
    let allProducts = await axios.get(`${baseUrl}/v1/api/ansr/products`);
    console.log("All products response:", allProducts.data);
    return allProducts.data.data;
  } catch (error) {
    console.log("Error Get All Products API", error.response);
    // error handler
    return error.response;
  }
};
export function getList() {
  return fetch(`${baseUrl}/v1/api/ansr/products`).then((data) => data.json());
}
