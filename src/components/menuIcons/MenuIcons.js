import React from 'react';
import {NavLink} from 'react-router-dom';
import MenuIconContacts from '../../icons/contacts.svg';
import MenuIconChat from '../../icons/chat.svg';
import MenuIconSettings from '../../icons/settings.png';

const MenuIcons = () => {
    return (
        <>
            <NavLink to='/chat'>
                <img src={MenuIconChat} className="icon-menu" />
            </NavLink> 
            <NavLink to='/contacts'>
                <img src={MenuIconContacts} className="icon-menu" />
            </NavLink>
            <NavLink to='/settings'>
                <img src={MenuIconSettings} className="icon-menu" />
            </NavLink>
        </>
    )
}

export default MenuIcons;