import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
