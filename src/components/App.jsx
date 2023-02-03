import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import Library from 'pages/Library';
import SharedLayout from './SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="library" element={<Library />} />
        </Route>
      </Routes>
    </div>
  );
};
