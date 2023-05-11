import { deleteContactsThunk } from 'redux/contacts/reducerContacts';
import {
  ContactItem,
  ContactsList,
  FilterDelBtn,
  FilterListItem,
  InputSearch,
  NoContacts,
} from './contactFilter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/store/store';
import {
  contactsSelector,
  filterSelector,
  isLoadingSelector,
} from 'redux/selectors/selectors';
import { ToastContainer, toast } from 'react-toastify';
// import { BiNotepad } from 'react-icons/bi';
import 'react-toastify/dist/ReactToastify.css';

export function ContactFilter() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);
  const valueFilter = useSelector(filterSelector);
  const isLoading = useSelector(isLoadingSelector);

  const onChangeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  const onDeleteContact = e => {
    dispatch(deleteContactsThunk(e.target.id));
    toast.info(`Контакт ${e.target.name} видалено`, {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  function onFilterContacts(filterContact) {
    const filtredContacts = filterContact.map(contact => {
      return (
        <FilterListItem id={contact.id} key={contact.id}>
          <ContactItem>
            {/* <BiNotepad
              style={{
                height: '30px',
                width: '30px',
                boxShadow: '1px 1px 4px  grey',
                borderRadius: '5px',
              }}
            /> */}
            {contact.name}: {contact.number}
          </ContactItem>

          <FilterDelBtn
            disabled={isLoading}
            id={contact.id}
            name={contact.name}
            onClick={onDeleteContact}
          >
            DELETE
          </FilterDelBtn>
        </FilterListItem>
      );
    });

    return filtredContacts.length ? (
      filtredContacts
    ) : (
      <>{!isLoading && <NoContacts> NO CONTACTS</NoContacts>}</>
    );
  }

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <InputSearch
        placeholder="search"
        onChange={onChangeFilter}
        value={valueFilter}
        name="filter"
      ></InputSearch>
      <ContactsList>
        {onFilterContacts(
          [...contacts].filter(contact => {
            return contact.name.includes(valueFilter);
          })
        )}
      </ContactsList>
    </>
  );
}
