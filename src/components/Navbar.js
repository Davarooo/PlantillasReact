import { useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <button 
        onClick={() => navigate('/home')} 
        className="nav-button"
      >
        Home
      </button>
      <button 
        onClick={() => navigate('/services')} 
        className="nav-button"
      >
        Servicios
      </button>
      <button 
        onClick={() => navigate('/contact')} 
        className="nav-button"
      >
        Contacto
      </button>
      <button 
        onClick={() => navigate('/about')} 
        className="nav-button"
      >
        Acerca de
      </button>
      <button 
        onClick={() => navigate('/login')} 
        className="nav-button logout-button"
      >
        Cerrar Sesión
      </button>
    </nav>
  );
}