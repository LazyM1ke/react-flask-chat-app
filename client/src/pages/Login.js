import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify"

const Login = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        username: "",
        password: "",
    });

    const toastOptions =  {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    const handleFormValidation = () => {
        const {username, password} = data

        if (username === "") {
            toast.error("Имя пользователя не может быть пустым !")
            return false
        } else if (password === "") {
            toast.error("Пароль не может быть пустым !")
            return false
        }

        return true;
    }

    const handleDataValidation = (response) => {
        if (response.status === "True") {
            navigate("/")
        } else {
            toast.error(response.message, toastOptions)
        }
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleFormValidation()) {
            await axios({
                method: 'post',
                url: '/log',
                data: {
                    data
                },
                headers: {
                    mode: 'no-cors'
                }
            }).then(res => handleDataValidation(res.data))
        }
    }

    return (
        <div>
            <ToastContainer />
            <div className="form-container">
                <form onSubmit={(event => handleSubmit(event))}>

                    <h1>Войти</h1>

                    <TextField id="outlined-basic"
                               label="Имя пользователя"
                               name="username"
                               variant="outlined"
                               type="text"
                               onChange={(e) => handleChange(e)}
                    />
                    <TextField id="outlined-basic"
                               label="Пароль"
                               name="password"
                               variant="outlined"
                               type="password"
                               onChange={(e) => handleChange(e)}
                    />
                    <Button variant="contained" onSubmit={handleSubmit} type='submit'>Войти в аккаунт</Button>

                    <span>Нет аккаунта ? <Link to="/register"><Button variant="outlined" size="small">Зарегистрироваться</Button></Link></span>

                </form>
            </div>
        </div>
    );
};

export default Login;
