const initialState = {
    isLoggedIn: false
};

function rootReducer(state = initialState, action) {
    if (action.type === "LOGOUT") {
        return Object.assign({}, state, {
            isLoggedIn: state.isLoggedIn.concat(action.payload)
        });

    }
    return state;
};

export default rootReducer;