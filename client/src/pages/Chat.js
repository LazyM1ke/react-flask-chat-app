import React, {useEffect, useState, useRef} from 'react';
import Dialogs from "../components/Dialogs/Dialogs";
import "./Chat.scss"
import {useNavigate} from "react-router-dom";
import ChatContainer from "../components/ChatContainer/ChatContainer";
import {io} from "socket.io-client";
import Welcome from "../components/Welcome/Welcome"

const Chat = () => {
    const host = "http://localhost:5000"
    const socket = useRef();
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

    useEffect(() => {
        if (currentUser) {
            socket.current = io(host);
            socket.current.on('connect', function () {
                socket.current.emit("add_user", {
                    socket_id: socket.current.id,
                    username: currentUser,
                })
            })
        }
    }, [currentUser]);

    const handleChatChange = (chat) => {
        setCurrentChat(chat);
    };

    return (
        <div className="chat">
            <div className="chat-container">
                <Dialogs changeChat={handleChatChange}/>
                {currentChat === undefined ? (
                    <Welcome currentUser={currentUser}/>
                ) : (
                    <ChatContainer currentChat={currentChat} currentUser={currentUser} socket={socket}/>
                )}
            </div>
        </div>
    );
};

export default Chat;