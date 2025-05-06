// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home.js';
import Login from './pages/Login/login.jsx';
import Cadastro from './pages/Cadastro/cadastro.jsx';
import DepositoPix from './pages/Deposito/deposito.jsx';
import Dashboard from './components/Dashboard/dashboard.jsx';
import { AuthProvider } from './AuthContext.js';
import RotaProtegida from './RotaProtegida.js';
import HomeUsuario from './pages/HomeUsuario/homeusuario.js';

function App() {

  return (
    <AuthProvider>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/deposito" element={<DepositoPix />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/usuario" element={<HomeUsuario />} />
      <Route
            path="/home" element={
              <RotaProtegida>
                <Home />
              </RotaProtegida>
            }
          />
    
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
