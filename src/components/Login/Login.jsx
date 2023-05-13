import { useDispatch } from 'react-redux';
import { FormBtn, FormLabel, FormLogin } from './Login.styled';
import { loginUserThunk } from 'redux/reducers';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    dispatch(loginUserThunk({ email: email.value, password: password.value }));
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
