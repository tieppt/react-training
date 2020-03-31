import React, { Component } from 'react';
import './App.css';
import { Header } from './components/header';
import { SideNav } from './components/sidenav';
import { User } from './models/user';
import { MainContainer } from './context/main-container';

interface AppState {
  user: User;
}

class App extends Component<{}, AppState> {
  state: AppState = {
    user: {
      id: 'some-uuid',
      avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/240px-Mr._Smiley_Face.svg.png',
      playlist: ['Microservices', 'TypeScript programming'],
      username: 'John Doe',
      searchHistory: [],
    }
  }
  render() {
    return (
      <>
        <div className="container">
          <Header user={this.state.user} />
          <main>main content</main>
          <aside>
            <SideNav user={this.state.user}/>
          </aside>
          <hr/>
        </div>
        <MainContainer user={this.state.user} />
      </>
    );
  }

}

export default App;
