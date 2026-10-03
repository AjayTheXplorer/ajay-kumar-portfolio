import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NexaHomeza from './pages/NexaHomeza';
import Tapnix from './pages/Tapnix';
import Gumb from './pages/Gumb';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Routes>
       
        <Route path="/" element={<Home />} />

        <Route
          path="/work/nexahomeza"
          element={<NexaHomeza />}
        />

        <Route
          path="/work/tapnix"
          element={<Tapnix />}
        />

        <Route
          path="/experience/gumb"
          element={<Gumb />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;