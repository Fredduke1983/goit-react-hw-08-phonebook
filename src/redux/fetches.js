import axios from 'axios';

const baseAxios = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  return (baseAxios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${token}`);
};

const delToken = () =>
  delete baseAxios.defaults.headers.common['Authorization'];

export const fetchAddNewUser = newUser => {
  try {
    const fetchAxios = baseAxios.post('/users/signup', newUser);

    return fetchAxios;
  } catch (error) {
    console.log(error);
  }
};

export const fetchLoginUser = async user => {
  try {
    const { data } = await baseAxios.post('/users/login', user);
    setToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGetCurrentUser = async token => {
  try {
    if (token === '') return;
    setToken(token);
    const { data } = await baseAxios.get('/users/current');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchLogoutUser = async token => {
  try {
    await baseAxios.post('/users/logout');
    delToken();
  } catch (error) {
    console.log(error);
  }
};

export const getContacts = async token => {
  if (token === '') return;
  console.log('set tokennn');
  setToken(token);
  const data = await axios.get('/contacts');
  console.log('getContacts', data);
  return data;
};

export const createContacts = async (contact, token) => {
  setToken(token); // сюди все норм прилітає {name:hhh, number:kkk} + token також є/
  const { data } = await axios.post(`/contacts`, contact);
  console.log(data); // сюди вже не доходить,
  return data;
};

export const deleteContacts = async id => {
  const deleteContact = await axios.delete(`/contacts/${id}`);

  return deleteContact.data;
};
