import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

export function App() {
    return(
        <>
            <div className="app">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </>
    )
}