import React, {useEffect, useState} from 'react';
import Avatar from "../../assets/avatar.png";
import "./ChatContainer.scss";
import ChatInput from "../ChatInput/ChatInput";
import axios from "axios";


const ChatContainer = ( {currentChat, currentUser} ) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // const response = axios.post("getmsg", {
        //     from: currentUser.id,
        //     to: currentChat.id,
        // })

    },[currentChat])

    const handleSendMsg = async (msg) => {
        await axios.post("/api/add_message", {
            from: currentUser,
            to: currentChat.username,
            message: msg,
        })

    }

    return (
        <div className="chat-cont">
            <div className="chat-cont-header">
                <div className="user-details">
                    <div className="avatar">
                        <img
                            src={Avatar}
                            alt="avatar"
                        />
                    </div>
                    <div className="username">
                        <h3>{currentChat.username}</h3>
                    </div>
                </div>
            </div>
            <div className="chat-messages">

                {/*{messages.map((message) => {*/}
                {/*    return (*/}
                {/*        <div key={uuidv4()}>*/}
                {/*            <div*/}
                {/*                className={`message ${*/}
                {/*                    message.fromSelf ? "sended" : "recieved"*/}
                {/*                }`}*/}
                {/*            >*/}
                {/*                <div className="content ">*/}
                {/*                    <p>{message.message}</p>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    );*/}
                {/*})}*/}

            </div>
            <ChatInput handleSendMsg={handleSendMsg}/>
        </div>
    );
};

export default ChatContainer;
