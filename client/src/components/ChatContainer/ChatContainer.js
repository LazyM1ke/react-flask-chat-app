import React, {useEffect, useState} from 'react';
import Avatar from "../../assets/avatar.png";
import "./ChatContainer.scss";
import ChatInput from "../ChatInput/ChatInput";
import axios from "axios";


const ChatContainer = ( {currentChat, currentUser, socket} ) => {

    const [messages, setMessages] = useState([]);
    const [arrivalMessages, setArrivalMessages] = useState(null);

    useEffect(() => {
        axios.post("/api/get_messages", {
            from: currentUser,
            to: currentChat.username,
        }).then(res => setMessages(...Object.values(res.data)))
        socket.current.emit("add_user", {
            socket_id: socket.current.id,
            username: currentUser,
        })
    },[currentChat])


    const handleSendMsg = async (msg) => {


        socket.current.emit("add_message", {
            from: currentUser,
            to: currentChat.username,
            msg,
        });

        await axios.post("/api/add_message", {
            from: currentUser,
            to: currentChat.username,
            message: msg,
        })


        const msgs = [...messages];
        msgs.push({fromSelf: true, message: msg});
        setMessages(msgs);
    }

    useEffect(() => {
        if (socket.current) {
            socket.current.on("recieve_msg", (msg) => {
                setArrivalMessages({fromSelf: false, message: msg})
            })
        }
    })

    useEffect(() => {
        arrivalMessages && setMessages((prev) => [...prev, arrivalMessages])
    },[arrivalMessages])

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

                {messages.map((message, index) => {
                    return (
                        <div
                            className={`message ${
                                message.fromself == "True" ? "sended" : "recieved"
                            }`}
                            key={index}
                        >
                            <div className="content ">
                                <p>{message.content}</p>
                            </div>
                        </div>
                    );
                })}

            </div>
            <ChatInput handleSendMsg={handleSendMsg}/>
        </div>
    );
};

export default ChatContainer;
