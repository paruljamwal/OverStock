import axios from "axios"

export const GET_PRODUCTS_DATA = "GET_PRODUCTS_DATA";
export const GET_PRODUCTS_LOADING="GET_PRODUCTS_LOADING";
export const GET_PRODUCTS_ERROR="GET_PRODUCTS_ERROR";


export const GET_SINGLE_PRODUCT_LOADING="GET_SINGLE_PRODUCT_LOADING"
export const GET_SINGLE_PRODUCT_SUCCESS="GET_SINGLE_PRODUCT_SUCCESS"
export const GET_SINGLE_PRODUCT_ERROR="GET_SINGLE_PRODUCT_FALIURE"

export const GET_PAGINATION_PRODUCT_LOADING="GET_PAGINATION_PRODUCT_LOADING"
export const GET_PAGINATION_PRODUCT_SUCCESS="GET_PAGINATION_PRODUCT_SUCCESS"
export const GET_PAGINATION_PRODUCT_ERROR="GET_PAGINATION_PRODUCT_FALIURE"



export const getProducts = (payload)=>(
    {
        type:GET_PRODUCTS_DATA,
        payload:payload
    }
)

const loadingProduct=(payload)=>(
    {
        type:GET_PRODUCTS_LOADING,
        payload
    }
)

const errorProducts=(payload)=>({
    type:GET_PRODUCTS_ERROR,
    payload
})

//SINGLE PRODUCT************************

const singlegetProducts = (payload)=>(
    {
        type:GET_SINGLE_PRODUCT_SUCCESS,
        payload:payload
    }
)

const singleloadingProduct=(payload)=>(
    {
        type:GET_SINGLE_PRODUCT_LOADING,
        payload
    }
)

const singleerrorProducts=(payload)=>({
    type:GET_SINGLE_PRODUCT_ERROR,
    payload
})





export const getDataAPI = (page)=>(dispatch)=>{
        dispatch(loadingProduct())  
        axios.get(`https://stockover-backend-api.herokuapp.com/products/?page=${page++}&limit=30`)
        .then((res)=>dispatch(getProducts(res.data.products)))
        .catch((e)=>dispatch(errorProducts(e.data.products)))
    }



//GET SINGLE PRODUCT******************


export const getSingleAPI=(payload)=>(dispatch)=>{
    dispatch(singleloadingProduct())
   axios.get(`https://stockover-backend-api.herokuapp.com/products/${payload}`)
    .then((res)=>dispatch(singlegetProducts(res.data)))
  .catch((e)=>dispatch(singleerrorProducts(e.data)))
}