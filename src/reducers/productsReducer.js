import {ADD_PRODUCT, SUCCES_ADD_PRODUCT, ERROR_ADD_PRODUCT} from '../types';

//cada reducer tiene su propio state 
const initialState = {
    products: [],
    error: false,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_PRODUCT: 
            return {
                ...state,
                loading: action.payload
            }

        case SUCCES_ADD_PRODUCT:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }

        default:
            return state;
    }
}