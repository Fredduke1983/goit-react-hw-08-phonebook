import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { selectIsLoggedin } from 'redux/selectors';

export const Phonebook = () => {
  const navigate = useNavigate();
  const isLoggedin = useSelector(selectIsLoggedin);

  useEffect(() => {
    isLoggedin ? navigate('/phonebook') : navigate('/login');
  }, [isLoggedin, navigate]);

  return <h1>PHONEBOOK</h1>;
};
