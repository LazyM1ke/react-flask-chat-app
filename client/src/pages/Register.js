import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Register.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Stack, TextField} from "@mui/material";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";

const Register = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
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

    const handleValidation = () => {
        const { password, confirmPassword, username, email } = data;
        if (password !== confirmPassword) {
            toast.error(
                "Пароли должны совпадать !",
                toastOptions
            );
            return false;
        } else if (username.length < 3) {
            toast.error(
                "Имя пользователя должно быть болше 3 символов !",
                toastOptions
            );
            return false;
        } else if (password.length < 8) {
            toast.error(
                "Пароль должен быть >= 8 символов !",
                toastOptions
            );
            return false;
        } else if (email === "") {
            toast.error("Эл.почта не может быть пустой", toastOptions);
            return false;
        }
        return true;
    };

    const handleDataValidation = (response) => {
        if (response.status === "True") {
            toast.success(response.message, toastOptions)
        } else {
            toast.error(response.message, toastOptions)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
       if (handleValidation()) {
           await axios({
               method: 'post',
               url: '/reg',
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
            <>
                <ToastContainer />
                <div className="form-container">

                    <form onSubmit={(event => handleSubmit(event))}>

                        <h1>Регистрация</h1>

                        <TextField id="outlined-basic"
                                   label="Имя пользователя"
                                   name="username"
                                   variant="outlined"
                                   onChange={(e) => handleChange(e)}
                        />
                        <TextField id="outlined-basic"
                                   label="Эл. почта"
                                   name="email"
                                   variant="outlined"
                                   type="email"
                                   onChange={(e) => handleChange(e)}
                        />
                        <TextField id="outlined-basic"
                                   label="Пароль"
                                   name="password"
                                   variant="outlined"
                                   type="password"
                                   onChange={(e) => handleChange(e)}
                        />
                        <TextField id="outlined-basic"
                                   label="Подтверждение пароля"
                                   name="confirmPassword"
                                   variant="outlined"
                                   type="password"
                                   onChange={(e) => handleChange(e)}
                        />

                        <Button variant="contained" onSubmit={handleSubmit} type='submit'>Создать аккаунт</Button>

                        <span>Уже есть аккаунт ? <Link to="/login"><Button variant="outlined" size="small">Войти</Button></Link></span>

                    </form>

                </div>

            </>

    );
};

export default Register;

{/*<input type="text" placeholder="Имя пользователя" name="username"/>*/}
{/*<input type="email" placeholder="Эл. почта" name="email"/>*/}
{/*<input type="password" placeholder="Пароль" name="password"/>*/}
{/*<input type="password" placeholder="Подтвердите Пароль" name="confirm password"/>*/}
{/*<button type="submit">Создать аккаунт</button>*/}