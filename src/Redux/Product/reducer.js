import {
  GET_PRODUCTS_DATA,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_LOADING,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "./action";

const intialstate = {
  loading: false,
  error: false,
  products: [],
  singleproduct: {},
};

export const ProductReducer = (store = intialstate, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOADING:
      return {
        ...store,
        loading: true,
        error: false,
      };

    case GET_PRODUCTS_DATA:
      return { ...store, loading: false, products: [...payload], error: false };

    case GET_PRODUCTS_ERROR:
      return {
        ...store,
        loading: false,
        error: true,
      };

    case GET_SINGLE_PRODUCT_LOADING:
      return {
        ...store,
        loading: true,
        error: false,
      };

    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...store,
        loading: false,
        singleproduct: { ...payload },
        error: false,
      };

    case GET_SINGLE_PRODUCT_ERROR:
      return {
        ...store,
        loading: false,
        error: true,
      };
    default:
      return store;
  }
};
