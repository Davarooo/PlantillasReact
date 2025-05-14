import Navbar from '../components/Navbar';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <h1 className="home-title">Bienvenido</h1>
        <p className="home-description">Seleccione una opción del menú</p>
      </div>
    </div>
  );
}