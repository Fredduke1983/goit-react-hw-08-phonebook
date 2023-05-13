import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selectIsLoggedin } from 'redux/selectors';

export const PublicRoute = ({ children }) => {
  const isLoggedin = useSelector(selectIsLoggedin);

  return !isLoggedin ? children : <Navigate to="/" />;
};
