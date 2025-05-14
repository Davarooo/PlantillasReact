import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  const handleRegister = () => {
    navigate('/register'); // Cambiado para redirigir al formulario de registro
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Iniciar Sesión</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input type="text" placeholder="Usuario" className="login-input" />
          <input type="password" placeholder="Contraseña" className="login-input" />
          <button type="submit" className="login-button">Entrar</button>
        </form>
        
        <div className="register-section">
          <p className="register-text">¿No tiene una cuenta?</p>
          <button onClick={handleRegister} className="register-button">
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}