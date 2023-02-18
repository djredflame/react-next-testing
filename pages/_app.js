import Navigation from "../components/navigation/Navigation";
import Weather from "../components/weather/Weather";
import Counter from "../components/counter/Counter";

const App = ({Component, pageProps}) => {
    return(
        <>
        <header>
            <Navigation/>
            <Weather />
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