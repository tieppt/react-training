import React from "react";
import { User } from "../models/user";

interface HeaderProps {
  user: User;
}
export function Header(props: HeaderProps) {
  const {searchHistory = [], username} = props.user;
  return (
    <header className="header">
      <h2 className="title">Welcome {username}</h2>
      <div className="search">
        {searchHistory.map(item => <p>{item}</p>)}
      </div>
      <UserInfoMenu user={props.user}/>
    </header>
  );
}

interface UserInfoMenuProps {
  user: User;
}

function UserInfoMenu(props: UserInfoMenuProps) {
  const {avatarUrl} = props.user;
  return (
    <nav className="header-nav">
      <img src={avatarUrl} alt=""/>
      <div>Dropdown menu below</div>
    </nav>
  )
}
