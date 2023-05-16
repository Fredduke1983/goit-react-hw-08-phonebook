const selectToken = state => state.users.token;
const selectIsLoggedin = state => state.users.isLoggedin;
const selectName = state => state.users.user.name;
const contactsSelector = state => state.contacts.contacts.items;
const filterSelector = state => state.contacts.valueFilter;
const isLoadingSelector = state => state.contacts.contacts.isLoading;
const error = state => state.contacts.contacts.error;
const isLoadingUser = state => state.users.isLoading;
const isLoadingContacts = state => state.contacts.isLoading;

export {
  selectToken,
  selectIsLoggedin,
  selectName,
  contactsSelector,
  filterSelector,
  isLoadingSelector,
  error,
  isLoadingUser,
  isLoadingContacts,
};
