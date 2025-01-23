import React from 'react';
import './App.css';

const initialState = { count: 0 };

type ACTIONTYPE = | { type: "increment"; payload: number } | { type: "decrement"; payload: number };

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      <div className='counter'>
        <text>
          Count: {state.count}
        </text>
      </div>
      <div >
        <button className='counter-btn' onClick={() => dispatch({ type: "decrement", payload: 1 })}>
          -
        </button>
        <button className='counter-btn' onClick={() => dispatch({ type: "increment", payload: 1 })}>
          +
        </button>
      </div>
    </>
  );
}

export default App;