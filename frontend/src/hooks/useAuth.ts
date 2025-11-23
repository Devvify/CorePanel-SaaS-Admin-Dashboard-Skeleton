import { useAuth } from '../context/AuthContext';
export default function useAuthHook() {
  const { token, setToken } = useAuth();
  return { token, setToken };
}
