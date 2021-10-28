import React,{useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { addition } from '../JS/actions/actionAddition'

const Addition = () => {

    const [val1, setVal1] = useState("")
    const [val2, setVal2] = useState("")

    const dispatch = useDispatch()
    const sum = useSelector(state => state.reducerAddition.sum)

    return (
        <div>
            <input type="text" onChange={(e)=>setVal1(e.target.value)}  />
            <input type="text" onChange={(e)=>setVal2(e.target.value)} />
            <button onClick={()=>dispatch(addition(val1, val2))} >ADD</button>
            <h4>{`sum : ${sum}`}</h4>
        </div>
    )
}

export default Addition
