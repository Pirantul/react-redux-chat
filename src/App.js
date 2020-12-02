import React, { useState }  from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import Home from './components/home/Home';
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
          className="chat-list">
          <div className="chat-list-body">
            {visibleList === 'home' && <Home />}
            {visibleList === 'contacts' && <Contacts />}
            {visibleList === 'settings' && <Settings />}
          </div>
          <div className="chat-list-menu">
            <div className="icon-menu" onClick={()=>{handleClickIcon('home')}}>
              <HomeTwoToneIcon></HomeTwoToneIcon>
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
