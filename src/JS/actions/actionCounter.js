import { DECREMANT, INCREMANT, RESET } from "../constants/actionTypes"



export const increment = () => {
    return {
        type: INCREMANT
    }
}

export const decrement =() =>{
    return {
        type: DECREMANT
    }
}

export const reset =() =>{
    return {
        type: RESET
    }
}