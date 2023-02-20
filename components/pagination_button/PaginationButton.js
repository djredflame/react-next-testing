import { useEffect, useReducer } from "react"

const reducer = (state, action) => {

    switch(action.type){
        case "next":
            return {
                index: state.index + 1,
                dataLength: action.dataLength
            }
        case "prev":
            return {
                index: state.index - 1,
                dataLength: action.dataLength
            }
        case "first":
            return {
                index: 0,
                dataLength: action.dataLength
            }
        case "last":
            return {
                index: state.dataLength,
                dataLength: action.dataLength
            }
        default:
            return state
    }
}

const PaginationButton = ({dataLength, onStateChange}) => {
    const [ state, dispatch ] = useReducer(reducer, { index: 0, dataLength: 0})

    useEffect(() => {
        onStateChange({ index: state.index, dataLength: state.dataLength })
    }, [state.index])

    return (
        <>
            <button disabled={state.index === 0} type={"button"} onClick={() => {
                dispatch({type: "first", dataLength: dataLength})
            }}>
                First
            </button>
            <button disabled={state.index === 0} type={"button"} onClick={() => {
                dispatch({type: "prev", dataLength: dataLength})
            }}>
                Prev
            </button>
            <button disabled={state.index === state.dataLength - 1} type={"button"} onClick={() => {
                dispatch({type: "next", dataLength: dataLength})
            }}>
                Next
            </button>
            <button disabled={state.index === state.dataLength - 1} type={"button"} onClick={() => {
                dispatch({type: "last", dataLength: dataLength - 1})
            }}>
                Last
            </button>
        </>
    )

    
}

export default PaginationButton;