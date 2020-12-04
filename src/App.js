import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Chat from './components/pages/chat/Chat';
import Contacts from './components/pages/contacts/Contacts';
import Settings from './components/pages/settings/Settings';
import MenuIcons from './components/menuIcons/MenuIcons';
import ChatBody from './components/chatBody/ChatBody';

function App() {

  return (
    <Router>
      {document.location.pathname === '/' ? <Redirect from='/' to="/chat" /> : null }
      <div className="App">
        <div className="container">
          <div className="left-panel">
            <div className="left-panel-chat-list-body">
            <Switch>
                <Route path='/chat'>
                  <Chat />
                </Route>
                <Route path='/contacts'>
                  <Contacts />
                </Route>
                <Route path='/settings'>
                  <Settings />
                </Route>
              </Switch>
            </div>
            <div className="left-panel-menu">
              <MenuIcons />
            </div>
          </div>
          <Route path='/chat/:id'>          
            <ChatBody />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
