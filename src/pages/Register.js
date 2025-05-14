import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de registro real
    alert('Registro exitoso! Serás redirigido al login');
    navigate('/login');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Registro</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input type="text" placeholder="Usuario" className="login-input" required />
          <input type="password" placeholder="Contraseña" className="login-input" required />
          <input type="text" placeholder="Nombre completo" className="login-input" required />
          <input type="email" placeholder="Correo electrónico" className="login-input" required />
          <button type="submit" className="login-button">Registrarse</button>
        </form>
        
        <div className="register-section">
          <p className="register-text">¿Ya tienes una cuenta?</p>
          <button onClick={() => navigate('/login')} className="register-button">
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}