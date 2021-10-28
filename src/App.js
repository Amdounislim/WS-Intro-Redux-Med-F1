import './App.css';
import Counter from './components/Counter';
import { useDispatch, useSelector } from "react-redux"
import { toggle } from './JS/actions/actionShow';
import Addition from './components/Addition';

function App() {

  const dispatch = useDispatch()
  const aff = useSelector(state => state.reducerShow.show)

  return (
    <div className="App">
      <h1>React Redux -- WorkShop</h1>
      {/* <button onClick={() => dispatch(toggle())}>{aff ? "Hid Counter" : "Show Counter"}</button> */}
      {/* {aff ? <Counter /> : null} */}
      {/* {aff && <Counter />} */}
      <Addition />
    </div>
  );
}

export default App;
