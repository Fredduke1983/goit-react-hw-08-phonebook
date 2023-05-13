import { NavLink } from 'react-router-dom';
import { Description, HomeStyle, HomeStyleTitle } from './Home.styled';
import { selectIsLoggedin, selectName } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const Home = () => {
  const isLoggedin = useSelector(selectIsLoggedin);
  const name = useSelector(selectName);

  return (
    <HomeStyle>
      <HomeStyleTitle>It's your home PHONEBOOK</HomeStyleTitle>
      {isLoggedin ? (
        <Description>Wellcome, {name}</Description>
      ) : (
        <Description>
          Please, <NavLink to="/login">Login</NavLink> or{' '}
          <NavLink to="/signup">Signup</NavLink>
        </Description>
      )}
      {/* <Description>
        Please, <NavLink to="/login">Login</NavLink> or{' '}
        <NavLink to="/signup">Signup</NavLink>
      </Description> */}
    </HomeStyle>
  );
};
