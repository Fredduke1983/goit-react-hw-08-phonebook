import { Route, Routes } from 'react-router';
import { Layout } from './Layout';
import { Home } from './Home/Home';
import { RegistrationPage } from './Registration/Registration';
import { LoginPage } from './Login/Login';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="phonebook" element={<h2>PHONEBOOK</h2>} />
        <Route path="signup" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
