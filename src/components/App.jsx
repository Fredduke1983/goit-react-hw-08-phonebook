import { Route, Routes } from 'react-router';
import { Layout } from './Layout';
import { Home } from './Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="phonebook" element={<h2>Phonebook</h2>} />
        <Route path="signup" element={<h2>Registration</h2>} />
        <Route path="login" element={<h2>Login</h2>} />
      </Route>
    </Routes>
  );
};
