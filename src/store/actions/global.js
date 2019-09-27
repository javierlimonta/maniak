import * as actionTypes from './actionsTypes';
import URIs from '../../config.json';

export const getMenu = data => {
    return {
        type: actionTypes.FETCH_MENU,
        data:data
    };
};

export const getSlider = data => {
    return {
        type: actionTypes.FETCH_SLIDER,
        data:data
    };
}

export const fetchMenuHandler = () => {
    return dispatch => {
        const url = URIs.globals;
        fetch(url).then(result => {
            if (result.status === 200)
                return result.json();
        }).then(data => {
            dispatch(getMenu(data));
        })
    };
};

export const fetchSliderHandler = () =>{
    return dispatch => {
        const url = URIs.slider;
        fetch(url).then(result => {
            if (result.status === 200)
                return result.json();
        }).then(data => {
            dispatch(getMenu(data));
        })
    };
}