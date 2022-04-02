import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import axios from "axios";
import {useEffect} from "react";


function App() {


    useEffect(() => {
        async function fetchData() {
            await axios.get("127.0.0.1:5000").then(res => {
                console.log(res)
            })}
        fetchData();
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
