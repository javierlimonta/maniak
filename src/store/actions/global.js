import * as actionTypes from './actionsTypes';
import URIs from '../../config.json';

export const getMenu = menu => {
    return {
        type: actionTypes.FETCH_MENU,
        menu: menu
    };
};

export const getSlider = slider => {
    return {
        type: actionTypes.FETCH_SLIDER,
        slider: slider
    };
}

export const getCalculator = calculator => {
    return {
        type: actionTypes.FETCH_CALCULATOR,
        calculator: calculator
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

export const fetchSliderHandler = () => {
    return dispatch => {
        const url = URIs.slider;
        fetch(url).then(result => {
            if (result.status === 200)
                return result.json();
        }).then(data => {
            dispatch(getSlider(data));
        })
    };
}

export const fetchCalculatorHandler = () => {
    return dispatch => {
        const url = URIs.calculator;
        fetch(url).then(result => {
            if (result.status === 200)
                return result.json();
        }).then(data => {
            dispatch(getCalculator(data));
        })
    };
}