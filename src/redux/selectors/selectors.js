const contactsSelector = ({ contacts }) => contacts.items;
const filterSelector = ({ valueFilter }) => valueFilter;
const isLoadingSelector = ({ contacts }) => contacts.isLoading;
const error = ({ contacts }) => contacts.error;

export { contactsSelector, filterSelector, isLoadingSelector, error };
