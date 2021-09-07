import * as All from "./constants";

const initialState = {
    requesting: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case All.CHECKCONECTION:
            return{
                ...state,
                requesting: true,
            };
        default:
            return state;
    }
};

export default reducer;