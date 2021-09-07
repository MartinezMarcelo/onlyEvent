import * as All from "./constants";

const initialState = {
    selectStack: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      
        case All.SELECTSTACK:
            return{
                ...state,
                selectStack: action.stack,
            };
        default:
            return state;
    }
};

export default reducer;