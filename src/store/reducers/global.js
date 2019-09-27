import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    menu: [],
    slider: null
};

const getMenuState = (state, action) => {
    if (action.data)
        return updateObject(state, action.data);
    else {
        return state;
    }
}

const getSliderState = (state, action) => {
    if (action.data)
        return updateObject(state, action.data);
    else {
        return state;
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_MENU: return getMenuState(state, action);
        case actionTypes.FETCH_SLIDER: return getSliderState(state, action);
        default: return state;
    }
};

export default reducer;