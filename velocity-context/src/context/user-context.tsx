import React from "react";
import { User } from "../models/user";

const UserContext = React.createContext<User>({
  id: "",
  avatarUrl: "",
  playlist: [],
  username: "",
  searchHistory: [],
});

const { Provider: UCProvider, Consumer: UCConsumer } = UserContext;
export { UCProvider, UCConsumer, UserContext };
