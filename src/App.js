import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Dashboard from './pages/dashboard';
import AddProduct from './pages/addProduct';
import AddMenu from './pages/addMenu';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/Food" element={<AddProduct />} />
        <Route exact path="/AddFood" element={<AddMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
