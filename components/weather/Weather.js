import { useState, useEffect } from "react"

const Weather = () => {
    const [ weather , setWeather ] = useState([])
    const [ error, setError ] = useState("")
    const URL = `https://api.weatherbit.io/v2.0/current?lat=35.7796&city=Bern,CH&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&include=minutely`

    useEffect(() => {
        const fetchData = async (URL) => {
            try{
                const response = await fetch(URL);
                const data = await response.json();
                setWeather(data)
            } catch (e){
                console.log(e);
                setError(e);
            }
        }

        fetchData(URL)
    }, [URL])

    return(
        <>
            <h2>Weather</h2>
            <p>Bern</p>
            {!weather.data ? <p>Loading Temp...</p> : <p>{weather.data[0].temp} °C</p>}
            {!weather.data ? <p>Loading Description...</p> : <p>{weather.data[0].weather.description}</p> }
            {!weather.data ? <p>Loading Image</p> : <img src={`public/icons/${weather.data[0].weather.icons}`} alt={""}/>}
        </>
    )
}

export default Weather;

