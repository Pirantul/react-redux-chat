import React from 'react';
import { Link } from 'react-router-dom';
import './chatItem.css';

const ChatItem = ({user}) => {

    const pathTo = `/chat/${user.id}`;

    return (
        <Link to={pathTo}>
            <div className="chat-list-item">
                <img className="chat-list-item-avatar" src={user.avatar} alt='' />
                <div>
                    <div className="chat-list-item-name">{user.name}</div>
                    <div className="chat-list-item-status">{user.online}</div>
                </div>
                <div className="chat-list-item-message-icon">
                    {user.unreadMessage}
                </div>
            </div>
        </Link>
    );
}

export default ChatItem