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
            <p>{user.incommingMessages[0]}</p>
            <p>{user.outgoingMessages[1]}</p>
        </div>
        )
}

export default withRouter( ChatBody );