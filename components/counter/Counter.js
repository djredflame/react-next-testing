import { useReducer } from "react"

const reducer = (state, action) => {
  if (action.type === "add") {
    return {
      number: state.number + 1
    }
  }
  if (action.type === "subtract") {
    return {
      number: state.number - 1
    }
  }
  throw Error("Unknown action.")
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { number: 0 });

  return(
    <form>
      <h2>Counter</h2>
      <input type={"text"} defaultValue={state.number}/>
      <button type={"button"} onClick={() => {
        dispatch({ type: "add"})
      }}>Add</button>
      <button disabled={state.number === 0} type={"button"} onClick={() => {
        dispatch({ type: "subtract"})
      }}>Subtract</button>
    </form>
  )
}

export default Counter;
