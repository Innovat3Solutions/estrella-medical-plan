import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AffiliateSignup } from './pages/AffiliateSignup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AffiliateSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
