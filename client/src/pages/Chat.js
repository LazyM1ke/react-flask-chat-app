import React, {useEffect, useState} from 'react';
import Dialogs from "../components/Dialogs/Dialogs";
import "./Chat.scss"
import {useNavigate} from "react-router-dom";
import ChatContainer from "../components/ChatContainer/ChatContainer";

const Chat = () => {

    const navigate = useNavigate();

    const [currentChat, setCurrentChat] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);


    useEffect( () => {
        if (!localStorage.getItem("userData")) {
            navigate("/login")
        } else {
            setCurrentUser(localStorage.getItem("userData"));
        }
    })

    const handleChatChange = (chat) => {
        setCurrentChat(chat);
    };

    return (
        <div className="chat">
            <div className="chat-container">
                <Dialogs changeChat={handleChatChange}/>
                {currentChat === undefined ? (
                    <h1>Hello world !</h1>
                ) : (
                    <ChatContainer currentChat={currentChat} currentUser={currentUser}/>
                )}
            </div>
        </div>
    );
};

export default Chat;