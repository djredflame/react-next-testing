import { useState, useEffect } from "react"
const { WEATHER_API_KEY } = process.env;

const Weather = () => {
    const [ data, setData ] = useState([])
    const [ error, setError ] = useState("")
    const URL = `https://api.weatherbit.io/v2.0/current?lat=35.7796&city=Bern,CH&key=${WEATHER_API_KEY}&include=minutely`

    useEffect(() => {
        const fetchData = async (URL) => {
            try{
                const response = await fetch(URL);
                const data = await response.json();
                setData(data)
            } catch (e){
                console.log(e);
            }
        }

        fetchData(URL)
    }, [URL])

    if(!data){
        return(
            <>
                <h2>Weather</h2>
                <p>Bern</p>
                <p>{data.data[0].temp} °C</p>
                <p>{data.data[0].weather.description}</p>
            </>
            
        )
    } else {
        return(
            <>
                <h2>Weather</h2>
                <p>Bern</p>
                <p>Weather API Error</p>
            </>
            
        )
    }
    
}

export default Weather;

