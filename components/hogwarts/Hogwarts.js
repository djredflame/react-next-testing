import { useState, useEffect } from "react"
import uuid from "uuid"
import style from "./hogwarts.module.css"
import PaginationButton from "../pagination_button/PaginationButton"

const houses = [
    {id: uuid, name: `Gryffindor`},
    {id: uuid, name: `Hufflepuff`},
    {id: uuid, name: `Ravenclaw`},
    {id: uuid, name: `Slytherin`}
]

const Hogwarts = () => {
    const [ data, setData ] = useState([])
    const [ house, setHouse ] = useState(`Gryffindor`)
    const [state, setState] = useState({ index: 0, dataLength: 0 });

    const defaultHouse = "Gryffindor"

    const handleStateChange = (newState) => {
            setState(newState)
    }

    useEffect(() => {
        setState({index: state.index, dataLength: state.dataLength})
    }, [state.index])
    
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
                setState({ index: 0, dataLength: data.length });
            } catch(e) {
                console.log(e)
            }
        }

        fetchData(URL)
    }, [URL, house])

    console.log({index: state.index, dataLength: state.dataLength})

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
                        {!data[state.index] ? <p>loading</p> :
                            <div key={data[state.index].id}>
                                <div>
                                    <PaginationButton dataLength={data.length} onStateChange={handleStateChange}/>
                                </div>
                                <h3>{data[state.index].name}</h3>
                                <img src={data[state.index].image} alt={data[state.index].name}/>
                                <p>Actor: {data[state.index].actor}</p>
                                <p>Species: {data[state.index].species}</p>
                                <p>Gender: {data[state.index].gender === "male" ? "♂" : "Gender: ♀"}</p>
                                <p>Hair Colour: {data[state.index].hairColour}</p>
                                <p>Eye Colour: {data[state.index].eyeColour}</p>
                                <p>Ancestry: {data[state.index].ancestry}</p>
                                <p>Wand:</p>
                                <ul>
                                    <li><p>Wood: {data[state.index].wand.wood}</p></li>
                                    <li><p>Core: {data[state.index].wand.core}</p></li>
                                    <li><p>Length: {data[state.index].wand.length}</p></li>
                                </ul>


                            </div>
                        }
                    </>
                }
            </div>
        )
    }
}

export default Hogwarts;