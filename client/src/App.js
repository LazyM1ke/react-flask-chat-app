import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import axios from "axios";
import {useEffect} from "react";
import {dialogClasses} from "@mui/material";


function App() {

    const data = {"data": "data"}






    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/" element={<Chat/>}/>
        </Routes>
      </BrowserRouter>
  );
}



export default App;
