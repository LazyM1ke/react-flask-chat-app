import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './Register.scss';
import {Button, TextField} from "@mui/material";
import axios from "axios";

const Register = () => {
    const [data, setData] = useState({});


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


    return (
        <div className="form-container">
            <form onSubmit={(event => handleSubmit(event))}>

                <h1>Регистрация</h1>

                <TextField id="outlined-basic"
                           label="Имя пользователя"
                           variant="outlined"
                           onChange={(e) => setData({...data, username: e.target.value})}

                />
                <TextField id="outlined-basic"
                           label="Эл. почта"
                           variant="outlined"
                           type="email"
                           onChange={(e) => setData({...data, email: e.target.value})}
                />
                <TextField id="outlined-basic"
                           label="Пароль"
                           variant="outlined"
                           type="password"
                           onChange={(e) => setData({...data, password: e.target.value})}
                />
                <TextField id="outlined-basic"
                           label="Подтверждение пароля"
                           variant="outlined"
                           type="password"
                           onChange={(e) => setData({...data, confirmPassword: e.target.value})}
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