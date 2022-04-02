import React from 'react';
import {Button, TextField} from "@mui/material";
import {Link} from "react-router-dom";

const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
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
                    />
                    <TextField id="outlined-basic"
                               label="Пароль"
                               variant="outlined"
                               type="password"
                    />
                    <Button variant="contained" onSubmit={handleSubmit} type='submit'>Войти в аккаунт</Button>

                    <span>Нет аккаунта ? <Link to="/register"><Button variant="outlined" size="small">Зарегистрироваться</Button></Link></span>

                </form>
            </div>
        </div>
    );
};

export default Login;
