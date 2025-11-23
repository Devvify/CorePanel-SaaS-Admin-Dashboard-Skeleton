import { createContext, useState, useContext, ReactNode } from 'react';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }:{children:ReactNode}) => {
  const [token,setToken] = useState<string | null>(localStorage.getItem('token'));
  return <AuthContext.Provider value={{token,setToken}}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
