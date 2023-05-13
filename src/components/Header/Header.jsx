import { NavLink } from 'react-router-dom';
import { ListStyle, NavStyle } from './Header.styled';
import { selectIsLoggedin } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUserThunk, getLogoutThunk } from 'redux/reducers';

export const HeaderNav = () => {
  const isLoggedin = useSelector(selectIsLoggedin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(getLogoutThunk());
  };

  return (
    <NavStyle>
      <ListStyle>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/phonebook">Phonebook</NavLink>
        </li>
        <li>
          {!isLoggedin ? (
            <NavLink to="/login">Login</NavLink>
          ) : (
            <NavLink to="/login" onClick={handleLogout}>
              Logout
            </NavLink>
          )}
        </li>
        <li>{!isLoggedin && <NavLink to="/signup">Registration</NavLink>}</li>
      </ListStyle>
    </NavStyle>
  );
};
