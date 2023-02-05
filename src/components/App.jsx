import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import Library from 'pages/Library';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  );
};
