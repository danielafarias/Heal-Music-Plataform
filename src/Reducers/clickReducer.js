import { CLICK_UPDATE } from "../Actions/actionTypes";

const initialState = {
    newValue: ''
};

export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_UPDATE:
            return {
                ...state,
                newValue: action.newValue
            };
        default:
            return state;
    }
};
