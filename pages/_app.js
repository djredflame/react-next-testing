import Navigation from "../components/navigation/Navigation";
import Weather from "../components/weather/Weather";
import Counter from "../components/counter/Counter";
import Chuck from "../components/chuck/Chuck";

const App = ({Component, pageProps}) => {
    return(
        <>
        <header>
            <Navigation/>
            <Weather />
            <Chuck />
            <Counter />
        </header>
        <bod>
            <Component pageProps={pageProps}/>
        </bod>
        <footer>
            
        </footer>
        </>
    )
}

export default App;