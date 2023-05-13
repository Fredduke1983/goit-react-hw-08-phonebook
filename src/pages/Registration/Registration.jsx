import { useDispatch } from 'react-redux';
import { FormBtn, FormLabel, FormRegistration } from './Registration.styled';
import { fetchAddNewUser } from 'redux/fetches';
import { addNewUser } from 'redux/Slices/UsersSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { login, email, password } = e.target.elements;

    const newUser = fetchAddNewUser({
      name: login.value,
      email: email.value,
      password: password.value,
    });

    newUser.then(response => {
      if (response === 400) {
        toast.error(
          `Такі користувач або пошта  вже існують, введіть інші дані`,
          {
            position: 'top-left',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          }
        );
        return;
      }
      dispatch(addNewUser(response.data));
    });
  };

  return (
    <FormRegistration onSubmit={handleSubmit}>
      <FormLabel>
        <p>Name</p>
        <input type="text" name="login" placeholder="Login" />
      </FormLabel>

      <FormLabel>
        <p>E-mail</p>

        <input type="email" name="email" placeholder="Email" />
      </FormLabel>

      <FormLabel>
        <p>Password</p>

        <input type="password" name="password" placeholder="Password" />
      </FormLabel>

      <FormBtn type="submit">SIGNUP</FormBtn>
      <ToastContainer />
    </FormRegistration>
  );
};
