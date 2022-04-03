import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import axios from "axios";

const Login = () => {

    const [data, setData] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: '/log',
            data: {
                data
            },
            headers: {
                mode: 'no-cors'
            }
        }).then(res => console.log(res.data))
    }

    return (
        <div>
            <div className="form-container">
                <form onSubmit={(event => handleSubmit(event))}>

                    <h1>Войти</h1>

                    <TextField id="outlined-basic"
                               label="Имя пользователя"
                               variant="outlined"
                               type="text"
                               onChange={(e) => setData({...data, username: e.target.value})}
                    />
                    <TextField id="outlined-basic"
                               label="Пароль"
                               variant="outlined"
                               type="password"
                               onChange={(e) => setData({...data, password: e.target.value})}
                    />
                    <Button variant="contained" onSubmit={handleSubmit} type='submit'>Войти в аккаунт</Button>

                    <span>Нет аккаунта ? <Link to="/register"><Button variant="outlined" size="small">Зарегистрироваться</Button></Link></span>

                </form>
            </div>
        </div>
    );
};

export default Login;
