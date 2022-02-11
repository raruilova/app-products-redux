import {ADD_PRODUCT, SUCCES_ADD_PRODUCT, ERROR_ADD_PRODUCT} from '../types';

//crear nuevos productos 
export function createNewProductAction(product) {
    return (dispatch) => {
        dispatch(addProduct());

        try {
            dispatch(succesAddProduct(product));
        } catch (error) {
            dispatch(errorAddProduct(true));
            
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});

const succesAddProduct = (product) => ({
    type: SUCCES_ADD_PRODUCT,
    payload: product //solo si se va a modificar el estado
});

const errorAddProduct = () => ({
    
})
