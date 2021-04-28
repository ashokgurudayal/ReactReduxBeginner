import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,loggedin } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const loggedinstate = useSelector(state => state.isLoggedState)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter is {counter}</h1>
      <button onClick={()=>dispatch(increment())}>ADD</button>
      <button onClick={()=>dispatch(decrement())}>SUB</button>
      <p style={{marginTop: "100px"}}>
      {loggedinstate?'User is logged in': 'Not logged in'} 
      <button onClick={()=>dispatch(loggedin())}>{loggedinstate?'SIGN-OUT': 'SIGN-IN'} </button>
      </p>
    </div>
  );
}

export default App;
