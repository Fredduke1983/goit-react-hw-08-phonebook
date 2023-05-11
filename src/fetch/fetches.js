import axios from 'axios';

export const getContacts = async () => {
  const contacts = await axios.get(
    'https://6452a61dbce0b0a0f74cb532.mockapi.io/contacts/contacts'
  );
  return contacts.data;
};

export const createContacts = async contact => {
  const createContact = await axios.post(
    `https://6452a61dbce0b0a0f74cb532.mockapi.io/contacts/contacts`,
    { ...contact }
  );

  return createContact.data;
};

export const deleteContacts = async id => {
  const deleteContact = await axios.delete(
    `https://6452a61dbce0b0a0f74cb532.mockapi.io/contacts/contacts/${id}`
  );

  return deleteContact.data;
};
