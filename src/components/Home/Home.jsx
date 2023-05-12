import { NavLink } from 'react-router-dom';
import { Description, HomeStyle, HomeStyleTitle } from './Home.styled';

export const Home = () => {
  return (
    <HomeStyle>
      <HomeStyleTitle>It's your home PHONEBOOK</HomeStyleTitle>
      <Description>
        Please, <NavLink to="/login">Login</NavLink> or{' '}
        <NavLink to="/signup">Signup</NavLink>
      </Description>
    </HomeStyle>
  );
};
