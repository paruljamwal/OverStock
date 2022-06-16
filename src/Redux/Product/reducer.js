import { GET_PRODUCTS_DATA } from "./action";

const intialstate = {
    products:[],
    loading:false,
}

export const ProductReducer = (store=intialstate, {type,payload})=>{
  switch(type){
  case GET_PRODUCTS_DATA:
    return {...store , products:[...payload]}
    
    default:
        return store
  }
}