import React from "react";
import { User } from "../models/user";

export const UserContext = React.createContext<User>({
  id: 'some-uuid',
  avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/240px-Mr._Smiley_Face.svg.png',
  playlist: ['Microservices', 'TypeScript programming'],
  username: 'John Doe',
  searchHistory: [],
});
