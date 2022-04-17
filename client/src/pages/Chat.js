import React from 'react';
import Dialogs from "../components/Dialogs/Dialogs";
import "./Chat.scss"

const Chat = () => {
    return (
        <div className="chat">
            <div className="chat-container">
                <Dialogs/>
            </div>
        </div>
    );
};

export default Chat;