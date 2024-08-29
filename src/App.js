import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import UserContext from './context/UserContext';

import Header from './components/comun/NavBar';
import NavBarEmpresa from './components/administrador/NavBarEmpresa'
import NavBarCliente from './components/cliente/NavBarCliente';
import NavBarDomiciliario from './components/domiciliario/NavBarDomiciliario'

import RegistroCliente from './components/auth/RegistroCliente';
import Login from './components/auth/Login';

import AdminDash from './components/administrador/AdminDash';
import GestionProductos from './components/administrador/productos/GestionProductos';
import RegistroProductos from './components/administrador/productos/RegistroProductos';
import EditarProducto from './components/administrador/productos/EdicionProducto';

import ClienteDashboard from './components/cliente/ClienteDash';

import DetalleProducto from './components/cliente/productos/DetallesProducto';
import Carrito from './components/cliente/productos/Cart';

import DatosEntrega from './components/cliente/pedidos/DatosEntrega'
import Confirmacion from './components/cliente/pedidos/Confirmacion'
import Pedidos from './components/cliente/pedidos/Pedidos'
import DetallesPedido from './components/cliente/pedidos/DetallesPedido';

import DomiciliarioDashboard from './components/domiciliario/DomiciliarioDash';
import PedidosDomiciliario from './components/domiciliario/pedidos/PedidosDomiciliario';


import Footer from './components/comun/Footer';
import Inicio from './pages/Inicio';
import PedidosAntes from './components/comun/Pedidos'
import CartAntes from './components/comun/Cart'




const App = () => {
  const { role } = useContext(UserContext);

  let NavBarComponent = Header; // Valor por defecto

  if (role === 'administrador') {
    NavBarComponent = NavBarEmpresa;
  } else if (role === 'cliente'){
    NavBarComponent = NavBarCliente;
  } else if (role === 'domiciliario'){
    NavBarComponent = NavBarDomiciliario;
  } 

  console.log('Current role:', role); 

  return(
    <Router>
      <NavBarComponent />
      <main>
        <Routes>               
          <Route path="/" element={<Inicio />} />  
          <Route path="/Inicio" element={<Inicio />} />  
          <Route path="/pedidos-a" element={<PedidosAntes />} /> 
          <Route path="/carrito-a" element={<CartAntes />} />

          <Route path="/registro-cliente" element={<RegistroCliente />} />              
          <Route path="/login" element={<Login />} />              
          <Route path="/admin-dash" element={<AdminDash />} />  

          <Route path="/gestion-productos" element={<GestionProductos />} />
          <Route path="/registro-productos" element={<RegistroProductos />} />
          <Route path="/editar-producto/:id" element={<EditarProducto />} />


          <Route path="/cliente-dash" element={<ClienteDashboard />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path="/carrito" element={<Carrito />} /> 

          <Route path="/datos-entrega" element={<DatosEntrega />} /> 
          <Route path="/confirmar" element={<Confirmacion />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/pedido/:id" element={<DetallesPedido />} />
          

          <Route path="/PedidosDomiciliario" element={<PedidosDomiciliario />} />
          <Route path="/domiciliario-dash" element={< DomiciliarioDashboard />} />


        </Routes>

        <Footer/>
      </main>
    </Router>
  );
}

export default App;
