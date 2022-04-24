import React, {useState, useEffect} from 'react';
import "./ChatInput.scss";
import SendIcon from '@mui/icons-material/Send';

const ChatInput = ( {handleSendMsg} ) => {

    const [msg, setMsg] = useState("");


    const sendChat = (event) => {
        event.preventDefault();
        if (msg.length > 0) {
            handleSendMsg(msg);
            setMsg("");
        }
    };

    return (
        <div className="chat-input">
            <div className="button-container">
                {/*<div className="emoji">*/}
                {/*    <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />*/}
                {/*    {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}*/}
                {/*</div>*/}
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
