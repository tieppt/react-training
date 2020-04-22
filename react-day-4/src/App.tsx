import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import { NotificationSetting } from './components/notification-setting/notification-setting';
import { OnlineOffline } from './components/online-offline/online-offline';
import { PostList } from './components/post/post-list';
import { PostListReducer } from './components/post/post-list-reducer';
class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

function App() {
  const [show, setShow] = useState(true);
  function toggle() {
    setShow((pre) => !pre);
  }
  return (
    <div className='App'>
      <ErrorBoundary>
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
          <NotificationSetting />
        </div>
        <div>
          <button onClick={toggle}>Toggle</button>
          <hr />
          {show && <OnlineOffline />}
        </div>
        <div>
          <PostList />
        </div>
        <div>
          <PostListReducer></PostListReducer>
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default App;
