import { Outlet } from 'react-router-dom';
import { HeaderNav } from './Header/Header';

export const Layout = () => {
  return (
    <header>
      <HeaderNav />
      <Outlet />
    </header>
  );
};
