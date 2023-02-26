
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  LoginSuccess,
   GET_TOTAL_PRODUCTS_ERROR,
  GET_TOTAL_PRODUCTS_REQUEST,
  GET_TOTAL_PRODUCTS_SUCCESS,
  SET_CART_TOTALS
} from "./action.type";


const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  TotalData: [],
   isAuth:false,
  name:"",
  CartTotals : {
    total: 0,
    discount: 0,
    coupen: 0,
    social: 0,
    fee: 0,
    total_Amount: 0,
  }
};

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        products: payload,
      };
    }
    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_TOTAL_PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_TOTAL_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        TotalData: payload,
      };
    }
    case GET_TOTAL_PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case LoginSuccess:{
      return{...state,isAuth:true}
    }
    case SET_CART_TOTALS: {
      return {
        ...state,
       
        CartTotals: payload,
      };
    }
      default: {
      return state;
    }
  }
};
