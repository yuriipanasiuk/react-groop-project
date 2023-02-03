import { Outlet } from 'react-router-dom';
import Home from 'components/Header';

const SharedLayout = () => {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
};

export default SharedLayout;
