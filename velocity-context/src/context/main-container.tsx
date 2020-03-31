import { User } from "../models/user";
import { UserContext } from "./user-context";
import React from "react";
import { Header } from "./components/header";
import { SideNav } from "./components/sidenav";

export function MainContainer(props: { user: User }) {
  return (
    <UserContext.Provider value={props.user}>
      <div className="main-container">
        <Header />
        <main>main content</main>
        <aside>
          <SideNav />
        </aside>
      </div>
    </UserContext.Provider>
  );
}
