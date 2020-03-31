import React from 'react';
import { User } from '../models/user';
interface SideNavProps {
  user: User;
}
export function SideNav(props: SideNavProps) {
  const { playlist } = props.user;
  return (
    <nav className="sidenav">
      <ul>
        {playlist.map(item => <li key={item}>{item}</li>)}
      </ul>
    </nav>
  )
}
