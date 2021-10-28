import { ADDITION } from "../constants/actionTypes"



// export const addition=(payload)=>{
//     return{
//         type: ADDITION,
//         payload
//     }
// }
export const addition=(val1, val2)=>{
    return{
        type: ADDITION,
        val1,
       val2
    }
}