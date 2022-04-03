import React from 'react';
import './Header.scss'
import ChatIcon from '@mui/icons-material/Chat';

const Header = () => {
    return (
        <div className="header">
            <ChatIcon style={{fontSize:'40px'}}/>
            <h1>Chat app</h1>
        </div>

    );
};

export default Header;