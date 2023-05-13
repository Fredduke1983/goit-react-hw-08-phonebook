import { Route, Routes } from 'react-router';
import { Layout } from './Layout';
import { Home } from './Home/Home';
import { RegistrationPage } from './Registration/Registration';
import { LoginPage } from './Login/Login';
import { Phonebook } from './Phonebook/Phonebook';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="phonebook" element={<Phonebook />} />
        <Route path="signup" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
