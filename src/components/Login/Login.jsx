import { useDispatch, useSelector } from 'react-redux';
import { FormBtn, FormLabel, FormLogin } from './Login.styled';
import { logintUserThunk } from 'redux/reducers';

export const LoginPage = () => {
  const dispatch = useDispatch();

  useSelector(state => console.log('TOKEN = ', state.token));

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    dispatch(logintUserThunk({ email: email.value, password: password.value }));
  };

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
