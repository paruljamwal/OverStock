import axios from "axios"

export const GET_PRODUCTS_DATA = "GET_PRODUCTS_DATA";


const getProducts = (payload)=>(
    {
        type:GET_PRODUCTS_DATA,
        payload
    }
)


export const getData = ()=>(dispatch)=>{
      axios.get("").then((res)=>dispatch(getProducts(res.data)))
}
