import { Routes, Route } from 'react-router-dom';

import SharedLayout from './components/SharedLayout/SharedLayout';
import AuthMenu from './components/AuthMenu/AuthMenu';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<AuthMenu />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
