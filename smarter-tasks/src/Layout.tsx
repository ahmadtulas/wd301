import Header from './components/Header';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      {/* Conditionally render Header if not on /notfound route */}
      {location.pathname !== '/notfound' && <Header />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
