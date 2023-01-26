import { Routes, Route } from 'react-router-dom';

import SharedLayout from './components/SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
