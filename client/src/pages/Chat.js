import React from 'react';
import Message from "../components/Message/Message";
import Dialogs from "../components/Dialogs/Dialogs";
import Header from "../components/Header/Header";

const Chat = () => {
    return (
        <div>
            <Header/>
            <Dialogs/>
        </div>
    );
};

export default Chat;