import React, { useState }  from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import ChatTwoToneIcon from '@material-ui/icons/ChatTwoTone';
import Chat from './components/chat/Chat';
import Contacts from './components/contacts/Contacts';
import Settings from './components/settings/Settings';

function App() {
  const [visibleList, setVisibleList] = useState('home');

  const handleClickIcon = (setVisible) => {
    setVisibleList(setVisible)
  }

  return (
    <div className="App">
      <Grid className="grid-container"
        container
        spacing={3}>
        <Grid item xs={3}
          className="left-panel">
          <div className="chat-list-body">
            {visibleList === 'home' && <Chat />}
            {visibleList === 'contacts' && <Contacts />}
            {visibleList === 'settings' && <Settings />}
          </div>
          <div className="left-panel-menu">
            <div className="icon-menu" onClick={()=>{handleClickIcon('home')}}>
              <ChatTwoToneIcon></ChatTwoToneIcon>
            </div>
            <div className="icon-menu" onClick={()=>{handleClickIcon('contacts')}}>
              <ContactMailTwoToneIcon></ContactMailTwoToneIcon>
            </div>
            <div className="icon-menu" onClick={()=>{handleClickIcon('settings')}}>
              <SettingsTwoToneIcon></SettingsTwoToneIcon>
            </div>
          </div>
        </Grid>
        <Grid item xs={9}
          className="chat-room">

        </Grid>
      </Grid>
    </div>

  );
}

export default App;
