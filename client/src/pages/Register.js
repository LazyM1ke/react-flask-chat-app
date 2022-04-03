import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './Register.scss';
import {Button, TextField} from "@mui/material";
import axios from "axios";

const Register = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: '/reg',
            data: {
                data
            },
            headers: {
                mode: 'no-cors'
            }
        }).then(res => console.log(res.data))
    }

    // const handleValidation = () => {
    //     const {username, email, password, confirmPassword} = data
    //
    //     if (password !== confirmPassword) {
    //
    //     }
    //
    // }


    return (
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
    );
};

export default Register;

{/*<input type="text" placeholder="Имя пользователя" name="username"/>*/}
{/*<input type="email" placeholder="Эл. почта" name="email"/>*/}
{/*<input type="password" placeholder="Пароль" name="password"/>*/}
{/*<input type="password" placeholder="Подтвердите Пароль" name="confirm password"/>*/}
{/*<button type="submit">Создать аккаунт</button>*/}