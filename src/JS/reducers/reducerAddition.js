import {ADDITION} from "../constants/actionTypes"

const initialState={
    sum:0
}

const reducerAddition =(state=initialState, action)=>{
    if (action.type===ADDITION) {
        // return {...state, sum : Number(action.payload.val1) + +action.payload.val2}
        // return {...state, sum : Number(action.payload.x) + +action.payload.y}
        return {...state, sum : Number(action.val1) + +action.val2}
    } else {
        return state
    }
}

export default reducerAddition