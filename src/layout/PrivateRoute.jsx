import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';

const  PrivateRoute = ({ children }) => {

  const { currentUser } = useAuth();
   const location = useLocation();
   
   return currentUser ? (
        children
      ) : (
        <Navigate to="/signup" state={{ from: location }} replace />
      );
}

export default PrivateRoute; 