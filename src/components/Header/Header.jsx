import { NavLink } from 'react-router-dom';
import { ListStyle, NavStyle } from './Header.styled';

export const HeaderNav = () => {
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
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Registration</NavLink>
        </li>
      </ListStyle>
    </NavStyle>
  );
};
