import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchAddNewUser = newUser => {
  try {
    const fetchAxios = axios.post('/users/signup', newUser);

    return fetchAxios;
  } catch (error) {
    console.log(error);
  }
};

export const fetchLoginUser = async user => {
  try {
    const { data } = await axios.post('/users/login', user);

    return data;
  } catch (error) {
    console.log(error);
  }
};
