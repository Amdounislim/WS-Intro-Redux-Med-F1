import React from 'react'
import { connect } from 'react-redux'
import { decrement, increment, reset } from '../JS/actions/actionCounter'

const Counter = (props) => {
    return (
        <div>
            <button onClick={props.increment}>+</button>
            <h3>{props.counter}</h3>
            <button onClick={props.decrement}>-</button>
            <button onClick={props.reset}>Reset</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // counter: state.count
        counter: state.reducerCounter.count
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         inc: () => dispatch(increment()),
//         dec: () => dispatch(decrement())
//     }
// }

// const mapDispatchToProps ={
//     inc:increment,
//     dec:decrement,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
export default connect(mapStateToProps, { increment, decrement, reset })(Counter)
