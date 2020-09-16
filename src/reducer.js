export const initialState = {
    user: null,
};

export const actionTypes = {
    SET_USER: 'SET_USER',
};

const reducer = (action, state) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            }



        default:
            return state;
    }
};




export default reducer;