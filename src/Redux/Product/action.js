import axios from "axios"

export const GET_PRODUCTS_DATA = "GET_PRODUCTS_DATA";


const getProducts = (payload)=>(
    {
        type:GET_PRODUCTS_DATA,
        payload:payload
    }
)
const loadingproduct = ()=>(
    {
        type:"PRODUCT_LOADING"
    }
)


export const getDataAPI = ()=>(dispatch)=>{
          
        axios.get("https://stockover-backend-api.herokuapp.com/products").then((res)=>dispatch(getProducts(res.data.products)))
}
