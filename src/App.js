import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Chat from './components/pages/chat/Chat';
import Contacts from './components/pages/contacts/Contacts';
import Settings from './components/pages/settings/Settings';
import MenuIcons from './components/menuIcons/MenuIcons';
import ChatBody from './components/chatBody/ChatBody';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from './actions';

function App() {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.activeUser); 
  const inputChatText = useSelector((state)=> state.inputChat);

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
            
          </div>
          <div  className="right-panel">
            <Route path='/chat/:id'>          
              <ChatBody />
            </Route>
            
          </div>
          
        </div>
        <div>
          <div className="left-menu">
              <MenuIcons />
            </div>
          <div className="chat-input-wrapper">
              <input className="chat-input" />
              {/* <button className="btn-send" onClick={()=>{dispatch(actions.inputChatText(activeUser, inputChatText))}} /> */}
              <button className="btn-send" />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
