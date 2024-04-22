import AdminActionTypes from "./admin.types";

const INITIAL_STATE = {
    hideContent: true

};

const adminReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AdminActionTypes.ADMIN_HIDDEN:
            return{
                ...state,
                hideContent: !state.hideContent
            };
    
        default:
            return state;
    }
}

export default adminReducer;