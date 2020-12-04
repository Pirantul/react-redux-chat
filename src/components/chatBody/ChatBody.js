import React from 'react';
import { 
    withRouter
  } from "react-router-dom";
import './chatBody.css';
import chatAPI from '../../services/chatApi/chatAPI';

const ChatBody = (props) => {

    const id = props.match.params.id;
    const user = chatAPI.chatUsers.find((item, i)=>{return item.id === +id});

    return (
        <div>
            <h2 className='h2body'>{user.name}</h2>
            <br />
            <p>{user.messages[0]}</p>
            <p>{user.messages[1]}</p>
        </div>
        )
}

export default withRouter( ChatBody );