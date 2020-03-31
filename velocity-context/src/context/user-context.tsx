import React from "react";
import { User } from "../models/user";

export const UserContext = React.createContext<User>({
  id: '',
  avatarUrl: '',
  playlist: [],
  username: '',
  searchHistory: [],
});
