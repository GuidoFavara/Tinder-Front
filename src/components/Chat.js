import React from 'react';
import { Link } from "react-router-dom";
import './Chat.css'
import Avatar from '@material-ui/core/Avatar';

const Chat = ({ name, message, profilePic, timestamp }) => {
    return (
        <Link to={`/chat/${name}`}>
            <div className="Chat__Box">
                <Avatar className="User__Profile__Picture" alt={name} src={profilePic} />
                <div className="Chat__Inbox">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className="Chat__Timestamp">{timestamp}</p>

            </div>
        </Link>
    )
}

export default Chat
