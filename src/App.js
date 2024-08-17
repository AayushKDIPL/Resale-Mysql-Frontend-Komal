import logo from './logo.svg';
import './App.css';
import Inventory from './Component/Inventory';
import Excel from './Component/Excel';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from './Component/AdminHome';
import Login from './Component/Login';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<City />}/> */}
                <Route path="/admin" element={<AdminHome />}/>
                <Route path="/" element={<Inventory />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
