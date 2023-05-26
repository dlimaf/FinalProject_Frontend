import { useContext } from 'react';
import { AuthContext } from '../utils/contexts';

export const useAuth = () => useContext(AuthContext);