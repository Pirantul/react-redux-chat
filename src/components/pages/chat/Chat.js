import React from 'react';
import ChatItem from '../../chatItem/ChatItem';
import './chat.css';
import chatAPI from '../../../services/chatApi/chatAPI';


const Chat = () => {
    return (
        <>
            <h3>Chat</h3>
            <ul className="chat-list">
                {
                    chatAPI.all().map(user => (
                        <li key={user.id}>
                            <ChatItem user={user} />
                        </li>
                    ))
                }

            </ul>
        </>
    )
}

export default Chat