import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ProgressBar } from './components/progress-bar/progress-bar';
import { Countdown } from './components/countdown/countdown';

function handleClick() {
  console.log('clicked');
}

function handleError(e: string) {
  console.error(e);
}

interface UserAvatarProps {
  avatar?: string;
  onError: (v: string) => void;
}

function UserAvatar(props: UserAvatarProps) {
  return React.createElement('img', {
    className: 'img-responsive',
    src: props.avatar,
    alt: 'User Avatar',
    onError: () => props.onError('co loi xay ra'),
  });
}

interface UserProfileProps {
  avatar?: string;
  username: string;
}

function UserProfile(props: UserProfileProps) {
  // let el;
  // if (props.avatar) {
  //   el = <UserAvatar avatar={props.avatar} onError={handleError} />;
  // } else {
  //   el = <div>Nothing</div>;
  // }
  return (
    <React.Fragment>
      {/* {el} */}
      {/* {props.avatar ? (
        <UserAvatar avatar={props.avatar} onError={handleError} />
      ) : null} */}
      {props.avatar && (
        <UserAvatar avatar={props.avatar} onError={handleError} />
      )}
      <h3 className='username'>{props.username}</h3>
    </React.Fragment>
  );
}
const users = [
  {
    username: 'Peter Parker',
    avatar:
      'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png',
  },
  {
    username: 'Superman',
    avatar:
      'https://vignette.wikia.nocookie.net/superman/images/b/b1/Superman_Action_976_Gary_Frank.png/revision/latest/scale-to-width-down/340?cb=20170501140424',
  },
];

interface AppState {
  pgProgress: number;
}

class App extends React.Component<{}, AppState> {
  state = {
    pgProgress: 20,
  };

  increment = () => {
    // this.setState({
    //   pgProgress: this.state.pgProgress + 10,
    // });
    this.setState((state) => {
      return {
        pgProgress: state.pgProgress + 10,
      };
    });
  };
  render() {
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

        {/* <UserProfile username={'Superman'} avatar={SupermanAvatar}></UserProfile>
        <UserProfile {...user}></UserProfile> */}
        {users.map((user) => (
          <UserProfile key={user.username} {...user} />
        ))}
        <button onClick={this.increment}>Increment</button>
        <ProgressBar width={this.state.pgProgress} />

        <hr />
        <Countdown></Countdown>
      </div>
    );
  }
}

export default App;
