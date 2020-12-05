import React from 'react';
import { 
    withRouter
  } from "react-router-dom";
import './chatBody.css';
import chatAPI from '../../services/chatApi/chatAPI';

const ChatBody = (props) => {

    const id = props.match.params.id;
    const user = chatAPI.getUser(id)
    return (
        <div className="chat-body">
            <h2 className='h2body'>{user.name}</h2>
            <br />
            <div className="chat-body-container">
                {chatAPI.getUserMessages(id).map(msg => (
                    <p className={msg.direction === 'incomming' ? 
                    'incomming-message' :
                    'outgoing-message'}>
                    {msg.text}</p>
                ))}
            </div>
        </div>
        )
}

export default withRouter( ChatBody );