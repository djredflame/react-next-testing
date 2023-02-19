import Weather from "../components/weather/Weather";
import Counter from "../components/counter/Counter";
import Chuck from "../components/chuck/Chuck";

const IndexPage = () => {
    return (
        <>
            <h1>Home</h1>
            <Weather />
            <Chuck />
            <Counter />
        </> 
    )
}

export default IndexPage;