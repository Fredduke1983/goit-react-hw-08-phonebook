import { Route, Routes } from 'react-router';
import { Layout } from './Layout';
import { Home } from '../pages/Home/Home';
import { RegistrationPage } from '../pages/Registration/Registration';
import { LoginPage } from '../pages/Login/Login';
import { Phonebook } from '../pages/Phonebook/Phonebook';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RotatingLines } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { isLoadingContacts } from 'redux/selectors';

export const App = () => {
  const isLoading = useSelector(isLoadingContacts);
  return (
    <>
      {isLoading && (
        <div style={{ position: 'fixed', right: '50%', top: '50%' }}>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={isLoading}
          />
        </div>
      )}
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
    </>
  );
};
