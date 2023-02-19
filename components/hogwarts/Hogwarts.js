import { useState, useEffect, useReducer } from "react"
import uuid from "uuid"
import style from "./hogwarts.module.css"

const houses = [
    {id: uuid, name: `Gryffindor`},
    {id: uuid, name: `Hufflepuff`},
    {id: uuid, name: `Ravenclaw`},
    {id: uuid, name: `Slytherin`}
]

const reducer = (state, action) => {

    switch(action.type){
        case "next":
            return {
                number: state.number + 1
            }
        case "prev":
            return {
                number: state.number - 1
            }
        case "first":
            return {
                number: 0
            }
        case "last":
            return {
                number: action.dataLength
            }
    }
}

const Hogwarts = () => {
    const [ data, setData ] = useState([])
    const [ house, setHouse ] = useState(`Gryffindor`)
    const [ state, dispatch ] = useReducer(reducer, { number: 0, dataLength: 0})
    const defaultHouse = "Gryffindor"

    useEffect(() => {
        setHouse(defaultHouse)
    }, [defaultHouse])

    const URL = `https://hp-api.onrender.com/api/characters/house/${house}`

    useEffect(() => {
        const fetchData = async (URL) => {
            try{
                const response = await fetch(URL)
                const data = await response.json()
                setData(data)
            } catch(e) {
                console.log(e)
            }
        }

        fetchData(URL)
    }, [URL, house])

    if(!data){
        return (
            <>
                <h2>Hogwarts</h2>
                <p>Hogwarts API Error</p>
            </>
        )
    } else {
        return (
            <div className={style.hogwarts}>
                <h2>Hogwarts</h2>
                <form>
                    <label htmlFor={"houses"}>Choose a house:</label>
                    <select id={"houses"} value={house} onChange={(e) => setHouse(e.target.value)}>
                        {houses.map(house => (
                            <option key={house.id} value={house.name}>{house.name}</option>
                        ))}
                    </select>
                </form>
                {
                    <>
                        {!data[state.number] ? <p>loading</p> :
                            <div key={data[state.number].id} className>
                                <div>
                                    <button disabled={state.number === 0} type={"button"} onClick={() => {
                                        dispatch({type: "first"})
                                    }}>
                                        First
                                    </button>
                                    <button disabled={state.number === 0} type={"button"} onClick={() => {
                                        dispatch({type: "prev"})
                                    }}>
                                        Prev
                                    </button>
                                    <button disabled={state.number === data.length - 1} type={"button"} onClick={() => {
                                        dispatch({type: "next"})
                                    }}>
                                        Next
                                    </button>
                                    <button disabled={state.number === data.length - 1} type={"button"} onClick={() => {
                                        dispatch({type: "last", dataLength: data.length - 1})
                                    }}>
                                        Last
                                    </button>
                                </div>
                                <h3>{data[state.number].name}</h3>
                                <img src={data[state.number].image} alt={data[state.number].name}/>
                            </div>
                        }
                    </>
                }
            </div>
        )
    }
    

}

export default Hogwarts;