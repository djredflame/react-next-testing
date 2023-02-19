import Navigation from "../components/navigation/Navigation";
import style from "./app.module.css"

const App = ({Component, pageProps}) => {
    return(
        <main className={style.app}>
        <header>
            <Navigation/>
        </header>
        <bod>
            <Component pageProps={pageProps}/>
        </bod>
        <footer>
            
        </footer>
        </main>
    )
}

export default App;