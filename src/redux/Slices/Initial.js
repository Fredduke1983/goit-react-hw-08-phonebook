export const initialStateUsers = {
  user: {
    name: '',
    email: '',
    password: null,
  },
  isLoggedin: false,
  token: '',
};

export const initialStateContacts = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  valueFilter: '',
};
