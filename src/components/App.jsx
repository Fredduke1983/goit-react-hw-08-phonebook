import { Route, Routes } from 'react-router';
import { Layout } from './Layout';
import { Home } from '../pages/Home/Home';
import { RegistrationPage } from '../pages/Registration/Registration';
import { LoginPage } from '../pages/Login/Login';
import { Phonebook } from '../pages/Phonebook/Phonebook';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="phonebook"
          element={
            <PrivateRoute>
              <Phonebook />
            </PrivateRoute>
          }
        />
        <Route
          path="signup"
          element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
};
