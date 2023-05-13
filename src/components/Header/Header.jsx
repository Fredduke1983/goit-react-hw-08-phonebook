import { NavLink } from 'react-router-dom';
import {
  ListItemStyle,
  ListStyle,
  NavStyle,
  WellcomeTitle,
} from './Header.styled';
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
        <ListItemStyle>
          <NavLink to="/">Home</NavLink>
        </ListItemStyle>
        <ListItemStyle>
          <NavLink to="/phonebook">Phonebook</NavLink>
        </ListItemStyle>
      </ListStyle>
      <ListStyle>
        <ListItemStyle>
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
        </ListItemStyle>
        <ListItemStyle>
          {!isLoggedin && <NavLink to="/signup">Registration</NavLink>}
        </ListItemStyle>
      </ListStyle>
    </NavStyle>
  );
};
