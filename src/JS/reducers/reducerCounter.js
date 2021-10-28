import { DECREMANT, INCREMANT, RESET } from "../constants/actionTypes";

const intialState = {
    count: 0
}

const reducerCounter = (state = intialState, action) => {
    switch (action.type) {
        case INCREMANT:
            return { ...state, count: state.count + 1 };

        case DECREMANT:
            return { ...state, count: state.count - 1 };

        case RESET:
            return { ...state, count: 0 };
        

        default:
            return state;
    }

}

export default reducerCounter