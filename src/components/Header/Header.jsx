import { NavLink } from 'react-router-dom';
import { ListStyle, NavStyle, WellcomeTitle } from './Header.styled';
import { selectIsLoggedin, selectName } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentUserThunk, getLogoutThunk } from 'redux/reducers';

export const HeaderNav = () => {
  const isLoggedin = useSelector(selectIsLoggedin);
  const name = useSelector(selectName);

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
      </ListStyle>
      <ListStyle>
        <li>
          {!isLoggedin ? (
            <NavLink to="/login">Login</NavLink>
          ) : (
            <WellcomeTitle>
              <p>Wellcome, {name}</p>
              <NavLink to="/login" onClick={handleLogout}>
                Logout
              </NavLink>
            </WellcomeTitle>
          )}
        </li>
        <li>{!isLoggedin && <NavLink to="/signup">Registration</NavLink>}</li>
      </ListStyle>
    </NavStyle>
  );
};
