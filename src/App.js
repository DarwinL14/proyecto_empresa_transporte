import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import UserContext from './context/UserContext';

import Header from './components/comun/NavBar';
import NavBarAdmin from './components/administrador/NavBarAdmin';
import NavBarCliente from './components/cliente/NavBarCliente';
import NavBarDomiciliario from './components/domiciliario/NavBarDomiciliario'

import RegistroCliente from './components/auth/RegistroCliente';
import Login from './components/auth/Login';

import AdminDash from './components/administrador/AdminDash';
import GestionProductos from './components/administrador/productos/GestionProductos';
import RegistroProductos from './components/administrador/productos/RegistroProductos';
import EditarProducto from './components/administrador/productos/EdicionProducto';

import GestionUsuarios from './components/administrador/usuarios/GestionUsuarios';
import RegistroEmpleado from './components/administrador/usuarios/RegistroEmpleados';
import EditarUsuario from './components/administrador/usuarios/EdicionUsuarios';

import GestionProveedores from './components/administrador/proveedores/GestionProveedores';
import RegistroProveedor from './components/administrador/proveedores/RegistroProveedores';
import EditarProveedor from './components/administrador/proveedores/EdicionProveedores';

import GestionPedidos from './components/administrador/pedidos/PedidosAdmin'

import GestionVentas from './components/administrador/ventas/GestionVentas';
import RegistroVenta from './components/administrador/ventas/RegistroVentas';
import ConfirmacionVenta from './components/administrador/ventas/ConfirmacionVenta';

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
    NavBarComponent = NavBarAdmin;
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

          <Route path="/gestion-usuarios" element={<GestionUsuarios />} />  
          <Route path="/registro-empleado" element={<RegistroEmpleado />} />   
          <Route path="/editar-usuario/:id" element={<EditarUsuario />} /> 
          
          <Route path="/gestion-proveedores" element={<GestionProveedores />} /> 
          <Route path="/registro-proveedor" element={<RegistroProveedor />} />      
          <Route path="/editar-proveedor/:id" element={<EditarProveedor />} /> 

          <Route path="/gestion-pedidos" element={<GestionPedidos />} /> 

          <Route path="/gestion-ventas" element={<GestionVentas />} /> 
          <Route path="/registro-venta" element={<RegistroVenta />} />
          <Route path="/confirmar-venta" element={<ConfirmacionVenta />} />



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
