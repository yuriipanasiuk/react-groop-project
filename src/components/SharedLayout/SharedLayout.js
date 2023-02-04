import { Outlet } from 'react-router-dom';
import Header from 'components/HomeHeader';

const SharedLayout = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default SharedLayout;
