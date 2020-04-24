export interface Profile {
  id: string;
  name: string;
  title: string;
  roles: string[];
  email: string;
  phone: string;
  bio?: string;
  avatar?: string;
}
