import React, {useEffect, useState} from 'react';
import "./Dialogs.scss"
import ava from "../../assets/avatar.png"
import Logo from "../../assets/logo.png"
import axios from "axios";
import LogoutIcon from '@mui/icons-material/Logout';
import {useNavigate} from "react-router-dom";
import {ListItem, ListItemAvatar, ListItemButton, ListItemText, Avatar} from "@mui/material";

const Dialogs = ( {changeChat} ) => {

    const navigate = useNavigate();

    const [dialogs, setDialogs] = useState([]);
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);


    useEffect(() => {
        axios.get('/api/users')
            .then(res => setDialogs(...Object.values(res.data)))

        setCurrentUserName(localStorage.getItem("userData"))
    },[])

    const filteredDialogs = dialogs.filter(dialog => dialog.username !== currentUserName)


    const changeCurrentChat = (dialogId, dialog) => {
        setCurrentSelected(dialogId);
        changeChat(dialog);
    };

    const handleLogOut = () => {
        localStorage.clear();
        navigate("/login")
    }

    return (
        <div className="dialogs-container">

            <div className="brand">
                <img src={Logo} alt="logo"/>
                <h3>Just Talk</h3>
            </div>

            <div className="dialogs">

                {filteredDialogs.map((dialog) => {
                    return (

                        <ListItem
                            key={dialog.id}
                            disablePadding
                            onClick={() => changeCurrentChat(dialog.id, dialog)}
                        >
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        alt="avatar"
                                        src={ava}
                                    />
                                </ListItemAvatar>
                                <ListItemText primary={dialog.username} />
                            </ListItemButton>
                        </ListItem>

                    )
                })}

            </div>

            <div className="current-user">
                <div className="avatar">
                    <img src={ava} alt="avatar"/>
                </div>
                <div className="username">
                    <h2>{currentUserName}</h2>
                </div>
                <div className="logOut">
                    <LogoutIcon onClick={handleLogOut}/>
                </div>
            </div>

        </div>

    );
};

export default Dialogs;