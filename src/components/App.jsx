import { Route, Routes } from 'react-router';
import { Layout } from './Layout';
import { Home } from './Home/Home';
import { RegistrationPage } from './Registration/Registration';
import { LoginPage } from './Login/Login';
import { Phonebook } from './Phonebook/Phonebook';
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
