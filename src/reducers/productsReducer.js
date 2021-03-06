import {
  ADD_PRODUCT,
  SUCCES_ADD_PRODUCT,
  ERROR_ADD_PRODUCT,
  DOWNLOAD_START_PRODUCTS,
  DOWNLOAD_SUCESS_PRODUCTS,
  DOWNLOAD_ERROR_PRODUCTS,
  GET_PRODUCT_DELETE,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCT_EDIT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
} from "../types";

//cada reducer tiene su propio state
const initialState = {
  products: [],
  error: false,
  loading: false,
  deleteProduct: null,
  editProduct: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DOWNLOAD_START_PRODUCTS:
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      };

    case SUCCES_ADD_PRODUCT:
      return {
        ...state,
        loading: false,
        error: false,
        products: [...state.products, action.payload],
      };
      
    case DELETE_PRODUCT_ERROR:
    case DOWNLOAD_ERROR_PRODUCTS:
    case ERROR_ADD_PRODUCT:
    case EDIT_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DOWNLOAD_SUCESS_PRODUCTS:
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload,
      };

    case GET_PRODUCT_DELETE:
        return {
            ...state,
            deleteProduct: action.payload
        }

    case DELETE_PRODUCT_SUCCESS:
        return {
            ...state,
            products: state.products.filter(item => item.id !== state.deleteProduct),
            deleteProduct: null
        }

    case GET_PRODUCT_EDIT: 
    return {
      ...state,
      editProduct: action.payload
    }

    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        editProduct: null, 
        products: state.products.map(item => item.id === action.payload.id ? action.payload : item)
      }

    default:
      return state;
  }
}
