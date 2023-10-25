import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./tour/view/Home";
import {TourInformation} from "./tour/view/TourInformation";
import {FormCreate} from "./tour/view/FormCreate";
import {FormEdit} from "./tour/view/FormEdit";

function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'/tourInformation/:id'} element={<TourInformation/>}></Route>
                <Route path={'/create'} element={<FormCreate/>}></Route>
                <Route path={'/edit/:id'} element={<FormEdit/>}></Route>
            </Routes>
        </>
    );
}

export default App;
