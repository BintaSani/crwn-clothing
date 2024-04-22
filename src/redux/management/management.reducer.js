import ManagementActionTypes from "./management.types";

const INITIAL_STATE = {
    hide: true
};

const managementReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ManagementActionTypes.MANAGEMENT_HIDDEN:
            return{
                ...state,
                hide: !state.hide
            }
        default:
            return state;
    }
}

export default managementReducer;