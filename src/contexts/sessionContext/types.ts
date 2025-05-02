
export interface ISessionContextType {
  plan: IPlan;
  user: IUser;
  isLoggedIn: boolean;
}

export interface IUser {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  avatar?: string | null;
}

export interface IPlan {
  id?: string | null;
  name?: string | null;
}

export interface ISessionProviderProps {
  children: React.ReactNode;
}