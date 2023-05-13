import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';
// import { selectIsLoggedin } from 'redux/selectors';

export const Phonebook = () => {
  // const navigate = useNavigate();
  // const isLoggedin = useSelector(selectIsLoggedin);

  // useEffect(() => {
  //   isLoggedin ? navigate('/phonebook') : navigate('/login');
  // }, [isLoggedin, navigate]);

  return (
    <>
      <ContactForm />
      <ContactFilter />
    </>
  );
};
