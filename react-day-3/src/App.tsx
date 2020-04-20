import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Switch } from 'antd';
import { OnlineOffline } from './components/online-offline/online-offline';
import { NotificationSetting } from './components/notification-setting/notification-setting';

interface AppState {
  show: boolean;
}

function App() {
  const showState = useState(true);
  const [show, setShow] = showState;
  function toggle() {
    setShow(!show);
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <div>
        Toggle
        <Switch defaultChecked onChange={toggle} />
      </div>
      <div>{show && <OnlineOffline />}</div>
      <div>
        <NotificationSetting />
      </div>
      <div>
        <NotificationSetting />
      </div>
    </div>
  );
}

export default App;
