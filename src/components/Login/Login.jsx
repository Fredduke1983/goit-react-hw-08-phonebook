import { useDispatch, useSelector } from 'react-redux';
import { FormBtn, FormLabel, FormLogin } from './Login.styled';
import { loginUserThunk } from 'redux/reducers';
import { useNavigate } from 'react-router';
import { selectIsLoggedin } from 'redux/selectors';
import { useEffect } from 'react';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    dispatch(loginUserThunk({ email: email.value, password: password.value }));
  };

  const navigate = useNavigate();
  const isLoggedin = useSelector(selectIsLoggedin);

  useEffect(() => {
    isLoggedin ? navigate('/phonebook') : navigate('/login');
  }, [isLoggedin, navigate]);

  return (
    <FormLogin onSubmit={handleSubmit}>
      <FormLabel>
        <p>E-mail</p>

        <input type="email" name="email" placeholder="Email" />
      </FormLabel>

      <FormLabel>
        <p>Password</p>

        <input type="password" name="password" placeholder="Password" />
      </FormLabel>

      <FormBtn type="submit">SIGNUP</FormBtn>
    </FormLogin>
  );
};
