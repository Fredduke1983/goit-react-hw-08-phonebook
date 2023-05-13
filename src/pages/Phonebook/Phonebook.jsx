import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { PhonebookStyle } from './Phonebook.styled';

export const Phonebook = () => {
  return (
    <PhonebookStyle>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
    </PhonebookStyle>
  );
};
