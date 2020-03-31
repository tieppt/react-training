export interface User {
  id: string;
  username: string;
  avatarUrl: string;
  playlist: string[];
  searchHistory?: string[];
}
