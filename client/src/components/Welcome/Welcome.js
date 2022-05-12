import React from 'react';
import Robot from '../../assets/robot.gif';
import './Welcome.scss';


const Welcome = ({ currentUser }) => {
    return (
        <div className="welcome">
            <img src={Robot}alt="welcome"/>
            <h1>Welcome, <span>{currentUser}</span></h1>
        </div>
    );
};

export default Welcome;