import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import axios from "axios";
import {useEffect} from "react";
import {dialogClasses} from "@mui/material";


function App() {

    // axios.get("http://127.0.0.1:5000", {
    //     mode: 'no-cors'
    // }).then(res => console.log(res))
    //
    const data = { username: 'example' };

    useEffect(() => {
        fetch("/reg", {
            method:"POST",
            mode: 'no-cors',
            body: JSON.stringify(data)
        }).then(res => console.log(res.json()))
    },[])



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
