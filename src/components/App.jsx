import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import {
  MainTitle,
  PhoneBookHead,
  PhoneBookStyle,
  SecondTitle,
} from './app.styled';
import { RotatingLines } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from 'redux/selectors/selectors';

export function App() {
  const isLoading = useSelector(isLoadingSelector);

  return (
    <PhoneBookStyle>
      <PhoneBookHead>
        <MainTitle>
          <h1>Phonebook</h1>
          <div style={{ position: 'fixed', transform: 'translateY(300%)' }}>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={isLoading}
            />
          </div>
        </MainTitle>
        <ContactForm />
      </PhoneBookHead>
      <SecondTitle>Contacts</SecondTitle>
      <ContactFilter />
    </PhoneBookStyle>
  );
}
