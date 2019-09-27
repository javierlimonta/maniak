import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    menu: [],
    slider: null,
    calculator:null
};

const getMenuState = (state, action) => {
    if (action.menu)
        return updateObject(state, action.menu);
    else {
        return state;
    }
}

const getSliderState = (state, action) => {
    if (action.slider)
        return updateObject(state, action.slider);
    else {
        return state;
    }
}

const getCalculatorState = (state, action) => {
    if (action.calculator)
        return updateObject(state, action.calculator);
    else {
        return state;
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MENU: return getMenuState(state, action);
        case actionTypes.FETCH_SLIDER: return getSliderState(state, action);
        case actionTypes.FETCH_CALCULATOR: return getCalculatorState(state, action);
        default: return state;
    }
};

export default reducer;