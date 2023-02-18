import { useState, useEffect } from "react"

const Chuck = () => {
    const [data, setData ] = useState([])
    const [number, setNumber] = useState(1)
    const URL = `https://api.chucknorris.io/jokes/random`

    useEffect(() => {
        const fetchData = async (URL) => {
            try{
                const response = await fetch(URL)
                const data = await response.json()
                setData(data)
            } catch(e){
                console.log(e)
            }
        }
        fetchData(URL)
    }, [URL, number])

    return(
        <>
            <h2>Chuck Norris Jokes</h2>
            <p>Displayed {number}</p>
            <p>{data.value}</p>
            <button type={"button"} onClick={() => {
                setNumber(number + 1)
            }}>Random</button>
        </>
    )
}

export default Chuck;