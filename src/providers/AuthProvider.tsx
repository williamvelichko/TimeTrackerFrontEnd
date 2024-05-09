import React, { createContext, useState, ReactNode } from "react";
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface User {
  id: number;
  name: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: () => boolean;
  logout: () => void;
  saveToken: (token: string) => void;
  saveUser: (user: User) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const saveToken = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const saveUser = (user: User) => {
    setUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
  };
  const isAuthenticated = () => {
    return !!user;
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        logout: handleLogout,
        saveToken,
        saveUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
