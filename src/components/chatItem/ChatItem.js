import React from 'react';
import {NavLink } from 'react-router-dom';
import * as actions from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import './chatItem.css';

const ChatItem = ({user}) => {
    const dispatch = useDispatch();
    const activeUser = useSelector((state) => state.activeUser); 
    const pathTo = `/chat/${user.id}`;

    return (
        <NavLink to={pathTo}>
            <div className={activeUser === +user.id ? "chat-list-item active" : "chat-list-item"} 
                onClick={()=>{dispatch(actions.setActiveUser(user.id))}}
                >
                <img className="chat-list-item-avatar" src={user.avatar} alt='' />
                <div>
                    <div className="chat-list-item-name">{user.name}</div>
                    <div className="chat-list-item-status">{
                        user.online ? 
                        <div className="chat-list-item-online">online</div> :
                        <div className="chat-list-item-offline">offline</div>
                    }</div>
                </div>
                <div className="chat-list-item-message-icon">
                    {user.unreadMessage}
                </div>
            </div>
        </NavLink>
    );
}

export default ChatItem