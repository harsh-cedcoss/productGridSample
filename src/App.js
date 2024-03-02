import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './Components/login/login';
import Dashboard from './Components/dashboard/dashboard';
import EditProduct from './Components/dashboard/editProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/dashboard/edit" element={<EditProduct />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
