import React, {useState, useEffect} from 'react';
import "./ChatInput.scss";
import SendIcon from '@mui/icons-material/Send';
import Picker from "emoji-picker-react";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

const ChatInput = ( {handleSendMsg, currentChat} ) => {

    const [msg, setMsg] = useState("");
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const handleEmojiPickerShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const handleEmojiClick = (event, emojiObj) => {
        let message = msg;
        message += emojiObj.emoji;
        setMsg(message);
    };


    const sendChat = (event) => {
        event.preventDefault();
        if (msg.length > 0) {
            handleSendMsg(msg);
            setMsg("");
        }
    };

    useEffect(() => {
        setMsg("")
    },[currentChat])

    return (
        <div className="chat-input">
            <div className="button-container">
                <div className="emoji">
                    <InsertEmoticonIcon onClick={handleEmojiPickerShow}/>
                    {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick}/>}
                </div>
            </div>
            <form className="input-container" onSubmit={(event) => sendChat(event)}>
                <input
                    type="text"
                    placeholder="Сообщение..."
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
                />
                <button type="submit">
                    <SendIcon/>
                </button>
            </form>
        </div>

    );
};

export default ChatInput;
