import React from 'react';
import Card from '@material-ui/core/Card';
import ChatItem from './Chat-item';
import './chat.css';

const Chat = () => {
    return (
        <>
            <h2>Chat</h2>
            <ul className="chat-list">
                <li className="chat-list-item">
                    <ChatItem />
                </li>
                <li className="chat-list-item">
                    <ChatItem />
                </li>
                <li className="chat-list-item">
                    <ChatItem />
                </li>
                <li className="chat-list-item">
                    <ChatItem />
                </li>
                
            </ul>
        </>
    )
}

export default Chat