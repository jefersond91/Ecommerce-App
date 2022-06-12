import { Home, Purchases, Login, NewsDetail } from "./pages";
import "./App.css";
import { HashRouter, Route, Routes} from 'react-router-dom'
import { Container } from "react-bootstrap";
import {LoadingScreen} from "./components";



function App() {
    return (
        <HashRouter>
            <Container>
                <LoadingScreen />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/news/:id" element={<NewsDetail />}/>
                    <Route path="/purchases" element={<Purchases />}/>
                    <Route path="/Login" element={<Login />}/>
                </Routes>
            </Container>
        </HashRouter>
    );
}

export default App;
