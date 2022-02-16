import {SHOW_ALERT, HIDE_ALERT} from '../types';

//muestra una alerta 
export function showAlert(alert) {
    return (dispatch) => {
        dispatch(showAlertError(alert));
    }
}

const showAlertError = (alert) => ({
    type: SHOW_ALERT,
    payload: alert,
});

//oculta una alerta
export function hideAlert() {
    return (dispatch) => {
        dispatch(hideAlertError());
    }
}

const hideAlertError = () => ({
    type: HIDE_ALERT,
});

