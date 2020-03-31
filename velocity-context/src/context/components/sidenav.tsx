import React from "react";
import { UserContext } from "../user-context";

export function SideNav() {
  return (
    <UserContext.Consumer>
      {({ playlist }) => (
        <nav className="sidenav">
          <ul>
            {playlist.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
      )}
    </UserContext.Consumer>
  );
}
