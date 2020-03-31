import React, { Component } from "react";
import { UserContext } from "../user-context";

export class Header extends Component {
  static contextType = UserContext;
  context!: React.ContextType<typeof UserContext>;
  render() {
    const { username, searchHistory = [] } = this.context;
    return (
      <header className="header">
        <h2 className="title">Welcome {username}</h2>
        <div className="search">
          {searchHistory.map(item => (
            <p>{item}</p>
          ))}
        </div>
        <UserInfoMenu />
      </header>
    );
  }
}

function UserInfoMenu() {
  return (
    <UserContext.Consumer>
      {({ avatarUrl }) => (
        <nav className="header-nav">
          <img src={avatarUrl} alt="" />
          <div>Dropdown menu below</div>
        </nav>
      )}
    </UserContext.Consumer>
  );
}
