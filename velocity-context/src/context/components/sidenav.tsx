import React from "react";
import { UCConsumer } from "../user-context";

export function SideNav() {
  return (
    <UCConsumer>
      {({ playlist }) => (
        <nav className="sidenav">
          <ul>
            {playlist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
      )}
    </UCConsumer>
  );
}
